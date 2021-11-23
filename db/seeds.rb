(1..8).each do |i|
  Annonce.create(
    title: "Annonce #{i}",
    price: 10000 * i,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero.',
    image: Rack::Test::UploadedFile.new(Rails.root.join('app', 'assets', 'images', 'dummy_img.jpg'), 'image/*', true)
  )
end