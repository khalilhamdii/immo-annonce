class AnnonceSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :description, :image

  def image
    url_for(object.image)
  end
end
