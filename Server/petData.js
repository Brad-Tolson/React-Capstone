const pets = [
    {
    //   petId: 1,
      name: "Fluffy",
      species: "cat",
      breed: "Persian",
      age: 3,
      location: "North",
      description: "Very friendly and playful",
      photo_url: "https://www.thesprucepets.com/thmb/Qt7k6w4eikK9ZDKULTEX7YEaAZs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-181861505-4e63227ed0a14dc9bfe86848ef54caf3.jpg",
    },
    {
    //   petId: 2,
      name: "Max",
      species: "dog",
      breed: "Golden Retriever",
      age: 2,
      location: "North",
      description: "Loves to play fetch",
      photo_url: "https://fwkc-cloudinary.corebine.com/fwkc-production/image/upload/c_thumb,dpr_1.0,f_webp,g_center,h_432,q_auto,w_768/v1/fwkc-prod/May_1",
    },
    {
    //   petId: 3,
      name: "Tiger",
      species: "cat",
      breed: "Bengal",
      age: 4,
      location: "North",
      description: "Loves to be petted",
      photo_url: "https://visitseaquest.com/wp-content/uploads/2022/11/unnamed-4-700x350.jpg",
    },
    {
    //   petId: 4,
      name: "Buddy",
      species: "dog",
      breed: "Labrador",
      age: 1,
      location: "North",
      description: "Very energetic and playful",
      photo_url: "https://diamondpet.storage.googleapis.com/wp-content/uploads/2020/11/22094827/black-labrador-dog-running-through-shallow-pond-110620-1024x538.jpg"
    },
    {
    //   petId: 5,
      name: "Mittens",
      species: "cat",
      breed: "Siamese",
      age: 2,
      location: "East",
      description: "Very cuddly and affectionate",
      photo_url: "https://www.ellevetsciences.com/wp-content/uploads/2022/11/ev-blog-siameseCat-1024x683.jpg"
    },
    {
    //   petId: 6,
      name: "Rocky",
      species: "dog",
      breed: "Pitbull",
      age: 3,
      location: "East",
      description: "Loves to run and play",
      photo_url: "https://www.pitbullinfo.org/uploads/7/8/9/7/7897520/pitbull-dog-1_2_orig.jpg"
    },
    {
    //   petId: 7,
      name: "Simba",
      species: "cat",
      breed: "Maine Coon",
      age: 5,
      location: "East",
      description: "Likes to explore and climb",
      photo_url: "https://www.thesprucepets.com/thmb/aWULXjTWxZbCJ4GixA7JMw8K15w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg"
    },
    {
    //   petId: 8,
      name: "Daisy",
      species: "dog",
      breed: "Poodle",
      age: 4,
      location: "East",
      description: "Very well-behaved and obedient",
      photo_url: "https://www.thesprucepets.com/thmb/pApY1ZGNtV22Ofd75Q-5hTI10wU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-poodle-playing-in-the-yard--182178740-59af2b3fc4124400107c9da3.jpg"
    },
    {
    //   petId: 9,
      name: "Socks",
      species: "cat",
      breed: "Tabby",
      age: 1,
      location: "South",
      description: "Loves to play with toys",
      photo_url: "https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg"
    },
    {
    //   petId: 10,
      name: "Rufus",
      species: "dog",
      breed: "Boxer",
      age: 2,
      location: "South",
      description: "Loves to be active and run around",
      photo_url: "https://www.thesprucepets.com/thmb/pqZyXdrIZTVnE8OeOUlyQkEEuQ8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/boxer-dog-breed-1117944-hero-dfe9f67a59ce4ab19ebd274c06b28ad1.jpg"
    },
    {
    //   petId: 11,
      name: "Loki",
      species: "cat",
      breed: "Sphynx",
      age: 3,
      location: "South",
      description: "Very friendly and loves attention",
      photo_url: "https://trupanion.com/-/media/Trupanion/Images/Breed--Guide--New/Sphynx/sphynx.jpg?rev=de69b463891943999daf4e9e4792261f&hash=1BAA191A1A90E50B4529D00A86E0EF25"
    },
    {
    //   petId: 12,
      name: "Harley",
      species: "dog",
      breed: "German Shepherd",
      age: 5,
      location: "South",
      description: "Very loyal and protective",
      photo_url: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_620/MTk2NzIzMTQ2NzMxMTAzMjUw/11-dogs-like-german-shepherd.webp"
    },
    {
    //   petId: 13,
      name: "Whiskers",
      species: "cat",
      breed: "Scottish Fold",
      age: 2,
      location: "West",
      description: "Likes to lounge and nap",
      photo_url: "https://www.petassure.com/petassure/file-streams/page/gyyyeLBsy9JBzjL7K01SFQ0rare-cat-breed-the-scottish-fold.jpg"
    },
    {
    //   petId: 14,
      name: "Cooper",
      species: "dog",
      breed: "Corgi",
      age: 1,
      location: "West",
      description: "Loves to play with balls",
      photo_url: "https://www.thefarmersdog.com/digest/wp-content/uploads/2021/12/corgi-top-1400x871.jpg"
    },
    {
    //   petId: 15,
      name: "Gizmo",
      species: "cat",
      breed: "Russian Blue",
      age: 2,
      location: "West",
      description: "Enjoys cuddling and lounging",
      photo_url: "https://www.petplace.com/static/5b0e77c42271ed6918a3fae4b808f356/98362/AdobeStock_112943750.jpg"
    },
    {
    //   petId: 16,
      name: "Milo",
      species: "dog",
      breed: "Chihuahua",
      age: 4,
      location: "West",
      description: "Very playful and energetic",
      photo_url: "https://cdn.britannica.com/44/233244-050-A65D4571/Chihuahua-dog.jpg?w=300"
    },
  ];

module.exports = pets;