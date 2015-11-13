# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name        = 'normalize-scss'

  s.summary     = %q{The Sass version of Normalize.css}
  s.description = %q{This is the Sass version of Normalize.css, a collection of HTML element and attribute rulesets to normalize styles across all browsers. This port aims to use a light dusting of Sass to make Normalize even easier to integrate with your website.}

  s.homepage    = 'https://github.com/JohnAlbin/normalize-scss'
  s.rubyforge_project =

  s.version     = '3.0.3'
  s.date        = '2015-10-17'
  s.licenses    = ['GPL-2']

  s.authors     = ['John Albin Wilkins']
  s.email       = 'virtually.johnalbin@gmail.com'

  s.add_runtime_dependency('sass', '~> 3.3', '>= 3.3.0')

  s.files       = %w[
    CHANGELOG.md
    CONTRIBUTING.md
    lib/normalize-scss.rb
    LICENSE.md
    normalize-scss.gemspec
    README.md
    sass/_normalize.scss
    sass/normalize/_font-values.scss
    sass/normalize/_support-for.scss
    sass/normalize/_variables.scss
  ]
end
