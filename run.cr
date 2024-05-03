require "watcher"

def run(pid)
  writer = IO::MultiWriter.new(STDOUT)
  Process.run("crystal", args: {"run", "./src/main.cr"},
    output: writer,
    error: writer,
    shell: true
  ) do |proc|
    pid = proc.pid
  end
end

def monitor(
  patterns,
  pid
)
  patterns.each do |pattern|
    watch pattern do |event|
      event.on_change do |files|
        files.each do |file, event|
          first, timestamp = event
          if !first
            puts "File #{file} has changed at #{timestamp}"
          end

          run(pid)
        end
      end
    end
  end

  run(pid)
end

pid = -1
monitor(
  [
    "src/*.cr",
    "src/*/*.cr",
    "src/views/*/*.ecr",
  ],
  pid
)
