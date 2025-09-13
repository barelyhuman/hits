require "kemal"
require "uri"
require "./hit-repo"

db = DB.open "sqlite3://./data.db"
hitRepo = HitsRepo.new db

macro renderer(filename)
  render "src/views/#{ {{filename}} }.ecr", "src/views/layouts/base.ecr"
end

# Utils

def getSumOfAll(hitRepo : HitsRepo, uriStr : String) : Int
  urls = [] of String

  if uriStr.starts_with?("http://") || uriStr.starts_with?("https://")
    uri_inst = URI.parse uriStr

    uri_inst.scheme = "http"
    urls.push(uri_inst.to_s)

    uri_inst.scheme = "https"
    urls.push(uri_inst.to_s)

    urls.push(uri_inst.to_s.gsub("http://", "").gsub("https://", ""))
  else
    uri_inst = URI.parse uriStr
    urls.push("http://#{uri_inst.to_s}")
    urls.push("https://#{uri_inst.to_s}")
    urls.push(uriStr)
  end

  count_int = 0
  urls.each do |url|
    count = hitRepo.get_hits_by_url url
    count_int += count.to_s.to_i
  end

  return count_int
end

def parseURL(uriStr : String) : String
  normalised_uri = uriStr
  if uriStr.starts_with?("http://") || uriStr.starts_with?("https://")
    uri_instance = URI.parse uriStr
    return "#{uri_instance.hostname}:#{uri_instance.port}"
  end
  uri_instance = URI.parse "http://#{uriStr}"
  return "#{uri_instance.hostname}:#{uri_instance.port}"
end

# Routes

get "/" do |env|
  renderer "index"
end

get "/hit" do |env|
  url = env.params.query["url"]
  parsedURL = parseURL url
  env.response.content_type = "application/json"
  begin
    hitRepo.add_site parsedURL
    %({"success": true})
  rescue ex
    puts ex
    %({"success": false})
  end
end

get "/hits" do |env|
  url = env.params.query["url"]
  parsedURL = parseURL url
  count = getSumOfAll(hitRepo, url)
  env.response.content_type = "application/json"
  %({"count": #{count}})
end

Kemal.run
