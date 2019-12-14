# frozen_string_literal: true

require 'open-uri'

class LandingPagesController < ApplicationController
  before_action :set_landing_page, only: %i[show edit update destroy]
  before_action :authenticate_user!, except: [:show]

  def index
    @landing_pages = current_user.landing_pages
  end

  def show
    render html: @landing_page.content.html_safe, layout: false
  end

  def new
    @landing_page = LandingPage.new
  end

  def edit; end

  def create
    p request.body
    @landing_page = LandingPage.new
    @landing_page.content = params[:content]
    @landing_page.user = current_user

    if @landing_page.save
      render json: { path: edit_landing_page_url(@landing_page) }
    else
      render json: @landing_page.errors, status: :unprocessable_entity
    end
  end

  def update
    @landing_page.content = params[:content]

    if @landing_page.save
      render json: { success: true }
    else
      render json: @landing_page.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @landing_page.destroy
    respond_to do |format|
      format.html { redirect_to landing_pages_url, notice: 'Landing page was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def set_asset
    assetName = unique_id
    targetPath = Rails.root.join('public', 'files', assetName);

    File.open(targetPath, 'wb') do |file|
      if params[:type] == 'upload'
        file.write params[:file].read.force_encoding('UTF-8')
      elsif params[:type] == 'url'
        file.write open(params[:url]).read.force_encoding('UTF-8')
      elsif params[:type] == 'base64'
        file.write Base64.decode64(params[:url_base64])
      end
    end

    render json: { url: "/files/#{assetName}" }
  end

  def upload_template
    render json: { success: true }
  end

  private

  def set_landing_page
    @landing_page = LandingPage.find(params[:id])
  end

  def unique_id
    t = DateTime
    id = t.now.strftime("%Y%m%d%k%M%S%L")
    id = id.to_i.to_s(36)
  end
end
