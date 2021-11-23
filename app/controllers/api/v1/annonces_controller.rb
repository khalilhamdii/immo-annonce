class Api::V1::AnnoncesController < ApplicationController
  before_action :set_annonce, only: %i[show update destroy]

  # GET /api/v1/annonces
  def index
    annonces = Annonce.all
    if annonces
      json_response(annonces)
    else
      render json: {
        status: 404,
        errors: ["Pas d'annonces trouvé"]
      }
    end
  end

  def create
    begin
      annonce = Annonce.new(annonce_params)
      annonce.save
        json_response(annonce, :created)
    rescue
        render json: {
          status: 422,
          errors: annonce.errors.full_messages
        }
    end
  end

  # GET /api/v1/annonces/:id
  def show
    json_response(@annonce)
  end

  # PUT /api/v1/annonces/:id
  def update
    @annonce.update(annonce_params)
    json_response(@annonce, :accepted)
  end

  # DELETE /api/v1/annonces/:id
  def destroy
      @annonce.destroy
      render json: {
        status: 'deleted',
        message: 'Annonce supprimée'
      }
  end

  private

  def annonce_params
    params.permit(:title, :price, :description, :image)
  end

  def set_annonce
    @annonce = Annonce.find(params[:id])
  end
end
