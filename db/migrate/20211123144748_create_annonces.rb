class CreateAnnonces < ActiveRecord::Migration[6.0]
  def change
    create_table :annonces do |t|
      t.string :title
      t.integer :price
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
