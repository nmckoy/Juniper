# a rake deal for JS karma testing

namespace :karma  do
  
  # bundle exec rake karma:start
  task :start => :environment do
    with_tmp_config :start
  end

  # bundle exec rake karma:run
  task :run => :environment do
    with_tmp_config :start, "--single-run"
  end

  private

  def with_tmp_config(command, args = nil)
    Tempfile.open('karma_unit.js', Rails.root.join('tmp') ) do |f|
      f.write unit_js(application_spec_files)
      f.flush

      # edit 3/27/2015: this did not work btw
      # i changed the angular-rails-template.js.erb to just not erb anymore. it is a plain
      # old angular module registry now
      # location /usr/local/rvm/gems/ruby-2.1.4@rails4/gems/angular-rails-templates-0.1.3/vendor/assets/javascripts
      
      # karma had issues reading some of my gem angular stuff e.g. angular-rails-tmeplates
      # that particular gem does .erb in its .js file and karma can distinguish that when
      # loaded. so now im precompiling my js assests and including that in karma as a file
      # dependency.
      
      # note: in rails4 precomplile happens only for changed assets
      #system "echo 'precompiling assets'"
      #system "RAILS_ENV=development bundle exec rake assets:precompile"
      system "./node_modules/karma/bin/karma #{command} #{f.path} #{args}"
    end
  end

  def application_spec_files
    sprockets = Rails.application.assets
    sprockets.append_path Rails.root.join('spec/client/karma')
    files = Rails.application.assets.find_asset('application_spec.js').to_a.map {|e| e.pathname.to_s }
  end

  def unit_js(files)
    unit_js = File.open('spec/client/karma/config/karma.conf.js', 'r').read
    unit_js.gsub "JS_APPLICATION_SPEC", "\"#{files.join("\",\n\"")}\""
  end
end