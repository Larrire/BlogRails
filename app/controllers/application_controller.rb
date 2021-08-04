class ApplicationController < ActionController::Base
    before_action :set_currenty_route

    protected

    def set_currenty_route
        params[:currenty_route] = "#{params[:controller]}/#{params[:action]}"
    end
end
