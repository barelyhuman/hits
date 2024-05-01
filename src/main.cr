require "kemal"
require "./hit-repo"

db = DB.open "sqlite3://./data.db"
hitRepo = HitsRepo.new db

macro renderer(filename)
  render "src/views/#{ {{filename}} }.ecr", "src/views/layouts/base.ecr"
end

get "/" do |env|
  renderer "index"
end

get "/hit" do |env|
  url = env.params.query["url"]
  env.response.content_type = "application/json"
  begin
    hitRepo.add_site url
    %({"success": true})
  rescue ex
    puts ex
    %({"success": false})
  end
end

get "/hits" do |env|
  url = env.params.query["url"]
  count = hitRepo.get_hits_by_url url

  env.response.content_type = "application/json"
  %({"count": #{count}})
end

Kemal.run
