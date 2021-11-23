class Annonce < ApplicationRecord
  validates :title, presence: true
  validates :price, presence: true
  validates :description, presence: true
  has_one_attached :image, dependent: :destroy
  validates :image, attached: true, file_size: { less_than_or_equal_to: 2.megabytes },
                     file_content_type: { allow: ['image/jpeg', 'image/png'] }
end
