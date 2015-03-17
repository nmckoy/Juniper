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
  
  # image_tag helper for social media providers
  def provider_image(provider, url_options = {}, html_options = {})
    btn = "btn btn-block btn-social btn-sm "
    if provider.include? "oogle"
      #included font awesome icons for social logins
      link_to(raw("<i class='fa fa-google-plus'></i> Sign in with Google"), url_options, 
                  # styles for boostrap-social buttons
                  html_options.merge(class: btn + "btn-google-plus"))
    elsif provider.include? "Face"
      link_to(raw("<i class='fa fa-facebook'></i> Sign in with Facebook"), url_options, 
                  html_options.merge(class: btn + "btn-facebook"))
    elsif provider.include? "Twit"
      link_to(raw("<i class='fa fa-twitter'></i> Sign in with Twitter"), url_options, 
                  html_options.merge(class: btn + "btn-twitter"))
    end
  end

end
