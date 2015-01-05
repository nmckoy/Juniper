# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :slog do
    description "MyString"
    poster "MyString"
    departure_date "2014-12-30"
    user nil
  end
end
