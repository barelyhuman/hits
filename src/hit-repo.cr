require "sqlite3"

class HitsRepo
  @db : DB::Database

  def initialize(db)
    @db = db
    @db.exec "CREATE TABLE if not exists sites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url text
    )"
    @db.exec "CREATE TABLE if not exists hits (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        site_id INTEGER,
        created_on timestamp,
        FOREIGN KEY(site_id) REFERENCES sites(id)
        );
      "
  end

  def add_site(url)
    id = nil
    begin
      id = @db.scalar "SELECT id from sites where url = ?", args: [url]
    rescue exc : DB::NoResultsError
      # no results, ignore
    rescue exc
      puts exc
    end

    if !id
      result = @db.exec "INSERT INTO sites values (null, ?) returning id", args: [url]
      @db.exec "INSERT INTO hits values (null, ?, ?)", args: [result.last_insert_id, Time.utc]
    else
      @db.exec "INSERT INTO hits values (null, ?, ?)", args: [id, Time.utc]
    end
  end

  def get_hits_by_url(url)
    id = nil
    begin
      id = @db.scalar "SELECT id from sites where url = ?", args: [url]
    rescue exc : DB::NoResultsError
      # no results, ignore
    rescue exc
      puts exc
    end

    if !id
      return 0
    end

    rowCount = @db.scalar "SELECT COUNT(*) from hits where site_id=?", args: [id]
    return rowCount
  end
end
