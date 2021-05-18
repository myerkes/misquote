class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.string :true_quote
      t.string :false_quote
      t.string :description
      t.timestamps
    end
  end
end
