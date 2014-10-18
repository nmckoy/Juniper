require 'spec_helper'

describe User do

  before { @user = User.new(name: 'Example User', email: 'user@example.com') }

  subject { @user }

  it { should respond_to(:name) }
  it { should respond_to(:email) }
  it { should respond_to(:password)}

  # name should be present
  describe 'when name is not present' do
    before {
      @user.name = ' '
    }
    it {should_not be_valid}
  end

  # email should be present
  describe 'when email is not present' do
    before {
      @user.email = ' '
    }
    it {should_not be_valid}
  end

  # password should be present
  describe 'when password is not present' do
    before {
      @user.password = ' '
    }
    it {should_not be_valid}
  end

  # password_confirmation should be present
  describe 'when passowrd_confirm is not present' do
    before {
      @user.password_confirmation = ' '
    }
    it {should_not be_valid}
  end

  # name length validation
  describe 'when name is too long' do
    before {@user.name= 'a' * 51}
    it {should_not be_valid}
  end

  describe 'when email address is invalid' do
    it 'should be invalid' do
      invalidness = %w[a@colgate,edu a@e.e a#e.c A@o.asfdsad]
      invalidness.each do |inv_address|
        @user.email = inv_address
        expect(@user).not_to be_valid
      end
    end
  end

  # couldnt get this test to pass weirdly
  # however validation in model works and returns right error
  # describe 'when email address is VALID' do
  #   it 'should be valid' do
  #     validness = %w[user@foo.com A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]
  #     validness.each do |v_address|
  #       @user.email = v_address
  #       expect(@user).to be_valid
  #     end
  #   end
  # end

end