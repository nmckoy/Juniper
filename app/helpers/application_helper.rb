module ApplicationHelper
  # needed a way for angularJS to ignore paths going back to 
  # full blown rails application. I am still using Devise+OAuth
  # for authentication in this application so I need a clean way for
  # angular just to ignore a couple of paths:
  #   signin, signup, moreinfo pages
  # these pages are specific to Devise and auth that I would like to keep
  #
  # this helper method is a special link_to for rails to stick in a 'target'
  # for the link. using "_self" allows path to be ignored by angular and so 
  # rails routing will pick this up and respective pages will come from server
  # from there I wll configure rails routes to send user back to angular app
  # where applicable
  # research links:
  #   http://stackoverflow.com/questions/17407024/telling-angular-js-to-ignore-a-specific-route
  #   http://stackoverflow.com/questions/11874317/link-to-with-target-blank
  def link_to_self(body, url_options = {}, html_options = {})
    link_to(body, url_options, html_options.merge(target: "_self"))
  end

end
