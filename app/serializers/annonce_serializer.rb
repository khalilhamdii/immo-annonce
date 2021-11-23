class AnnonceSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :price, :description, :image
  def image
    url_for(object.image)
  end
end
