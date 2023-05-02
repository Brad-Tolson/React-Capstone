# MVP
## Description
Pet Adoption Hub is a platform that connects potential pet owners with rescue pets looking for a forever home. Browse, adopt, and welcome a new furry friend into your life today!

## Features
- User can browse adoptable pets
- User can view pet details and photos
- User can apply to adopt a pet
- User can create an account to save favorite pets and application progress

## Other Features
- User can filter pets by species, breed, age, and location
- User can view a map of nearby shelters and rescue organizations

## Database
- `user` table
  - `user_id`, `username`, `email`, `password`
- `pet` table
  - `pet_id`, `name`, `species`, `breed`, `age`, `location`, `description`, `photo_url`
- `application` table
  - `application_id`, `user_id`, `pet_id`, `status`
- `favorites` table
  - `favorite_id`, `user_id`, `pet_id`

## Pages
- Landing page
- Pet listings page
- Pet details page
- Apply to adopt page
- Locations page
- Signup / login page