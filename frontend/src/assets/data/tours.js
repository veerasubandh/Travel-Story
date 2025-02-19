import tourImg01 from "../images/tourImg01.jpg";
import tourImg02 from "../images/tourImg02.jpg";
import tourImg03 from "../images/tourImg03.jpg";
import tourImg04 from "../images/tourImg04.jpg";
import tourImg05 from "../images/tourImg05.jpg";
import tourImg06 from "../images/tourImg06.jpg";
import tourImg07 from "../images/tourImg07.jpg";
import tourImg08 from '../images/tourImg08.jpg'
import tourImg09 from '../images/tourImg09.jpg'
import tourImg10 from '../images/tourImg10.jpg'
import tourImg11 from '../images/tourImg11.jpg'
import tourImg12 from '../images/tourImg12.jpg'


const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address:"Westminster Bridge, London, SE1 7PB, United Kingdom",
    price: 99,
    maxGroupSize: 10,
    desc: "Westminster Bridge is one of London's most iconic landmarks, offering breathtaking views of the city's skyline. Spanning the River Thames, this historic bridge connects the majestic Houses of Parliament with the vibrant South Bank. Built in 1862, Westminster Bridge is renowned for its elegant green design, symbolizing the color of the benches inside the House of Commons.Visitors can enjoy stunning sights of Big Ben, the London Eye, and the River Thames, making it a must-visit destination for photographers and tourists alike. Whether you're taking a scenic walk, capturing the beauty of London's architecture, or enjoying a river cruise, Westminster Bridge provides an unforgettable experience in the heart of the city.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address:"Bali, Indonesia - Denpasar 80113, Ubud 80571",
    price: 99,
    maxGroupSize: 8,
    desc: "Bali, the jewel of Indonesia, is a paradise that blends breathtaking landscapes, vibrant culture, and serene beaches. From the lush green rice terraces of Ubud to the golden sunsets of Seminyak, every corner of Bali is a dream come true for travelers.Discover ancient temples like Tanah Lot and Uluwatu, indulge in world-class surfing at Kuta Beach, or experience the spiritual tranquility of Bali’s famous yoga retreats. Whether you're an adventurer, a culture enthusiast, or a seeker of relaxation, Bali offers an unforgettable escape for every traveler.Book your Bali adventure today and immerse yourself in the magic of this tropical paradise! ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:"Ban Luang, Chom Thong District, Chiang Mai 50160, Thailand",
    price: 99,
    maxGroupSize: 8,
    desc: "Escape to the breathtaking Snowy Mountains of Thailand, a hidden gem where misty peaks, lush landscapes, and a serene winter wonderland await you. Nestled in the northern highlands, this magical destination offers a unique blend of adventure and tranquility. Whether you're exploring scenic hiking trails, witnessing stunning sunrise views, or immersing yourself in the rich local culture, the Snowy Mountains provide an unforgettable experience. Perfect for nature lovers and thrill-seekers alike, this paradise is your gateway to an extraordinary journey filled with awe-inspiring beauty and peaceful retreats. 🌿✨Book your tour today and experience Thailand like never before! ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address:"Wiang Kaen District, Chiang Rai 57310, Thailand",
    price: 99,
    maxGroupSize: 8,
    desc: "Witness the magical sunrise in Thailand as the golden hues of the sun gently illuminate the sky, casting a mesmerizing glow over serene beaches, majestic mountains, and lush landscapes. Whether you’re standing atop a scenic viewpoint or relaxing by the shore, the tranquil atmosphere and the soothing sound of nature create an unforgettable moment. Start your day with this breathtaking spectacle and let the beauty of Thailand captivate your soul.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address:"Nusa Penida, Klungkung Regency, Bali, Indonesia",
    price: 99,
    maxGroupSize: 8,
    desc: "Escape to the unspoiled paradise of Nusa Penida, Indonesia, where dramatic cliffs, crystal-clear waters, and pristine beaches create a breathtaking retreat. Explore the iconic Kelingking Beach, marvel at the turquoise waters of Angel’s Billabong, or take a refreshing dip at Crystal Bay. Whether you're seeking adventure or relaxation, Nusa Penida offers an unforgettable experience surrounded by nature’s wonders.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address:"Tokyo (Shinjuku Gyoen, Ueno Park), Kyoto (Maruyama Park), Osaka (Osaka Castle)",
    price: 99,
    maxGroupSize: 8,
    desc: "Experience the enchanting beauty of cherry blossoms in full bloom, transforming landscapes into a dreamy pink paradise. Whether strolling through parks or enjoying a picnic under the delicate petals, the sight of cherry blossoms creates a serene and unforgettable atmosphere. Celebrate the arrival of spring with this breathtaking natural wonder, a symbol of renewal, love, and fleeting beauty.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "Norway",
    distance: 500,
    address:"Sørvågen, 8392 Moskenes,Lofoten, Norway",
    price: 99,
    maxGroupSize: 8,
    desc: "Nestled in the heart of Norway’s stunning Lofoten archipelago, Holmen offers a tranquil retreat surrounded by majestic fjords, towering peaks, and the endless Arctic Ocean. This hidden gem is perfect for nature lovers, adventure seekers, and those looking to unwind in breathtaking surroundings. Whether you’re chasing the Northern Lights, exploring rugged coastlines, or savoring fresh Nordic cuisine, Holmen promises an unforgettable experience in the raw beauty of the Arctic wilderness.",
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Plitvice Lakes, Croatia",
    city: "Croatia",
    distance: 500,
    address:"53231 Plitvička Jezera,Lika-Senj County, Croatia",
    price: 99,
    maxGroupSize: 8,
    desc: "Nestled in the heart of Croatia, Plitvice Lakes National Park is a breathtaking natural wonder, boasting a series of cascading lakes connected by stunning waterfalls. The turquoise waters, surrounded by lush greenery and wooden walkways, create an enchanting experience for visitors. Whether you're hiking the scenic trails or taking a boat ride across the crystal-clear lakes, every corner of Plitvice feels like a dream.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Santorini, Greece",
    city: "Greece",
    distance: 500,
    address:"Thira (Fira), 847 00,Cyclades, Greece",
    price: 99,
    maxGroupSize: 8,
    desc: "Famous for its whitewashed houses, blue-domed churches, and breathtaking sunsets, Santorini is a dream destination in the heart of the Aegean Sea. The charming cliffside villages of Oia and Fira offer spectacular views, romantic dining spots, and a unique blend of ancient history and modern luxury. With its crystal-clear waters, volcanic beaches, and vibrant nightlife, Santorini is the perfect getaway for couples and travelers alike.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "10",
    title: "Great Ocean Road, Australia",
    city: "Australia",
    distance: 500,
    address:"Great Ocean Road, Victoria, Australia",
    price: 99,
    maxGroupSize: 8,
    desc: "One of the most scenic coastal drives in the world, the Great Ocean Road in Australia is a journey filled with breathtaking views and natural wonders. Stretching along the southern coastline, this route features the iconic Twelve Apostles—majestic limestone formations rising from the ocean. Along the way, travelers can explore pristine beaches, lush rainforests, and charming seaside towns, making it an unforgettable adventure.",
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },
  {
    id: "11",
    title: "Banff National Park, Canada",
    city: "Canada",
    distance: 500,
    address:"224 Banff Ave, Banff, AB T1L 1K2,Alberta, Canada",
    price: 99,
    maxGroupSize: 8,
    desc: "Located in the Canadian Rockies, Banff National Park is a paradise for nature lovers and adventure seekers. From the iconic turquoise waters of Lake Louise to the rugged mountain peaks and dense pine forests, this UNESCO World Heritage site offers endless opportunities for hiking, wildlife spotting, and photography. Whether you visit in summer for its lush trails or in winter for world-class skiing, Banff is a year-round wonder.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: false,
  },
  {
    id: "12",
    title: "Kyoto, Japan",
    city: "Japan",
    distance: 500,
    address:"Kyoto Prefecture, 600-0000,Japan",
    price: 99,
    maxGroupSize: 8,
    desc: "A city where tradition meets beauty, Kyoto is Japan’s cultural gem, known for its ancient temples, serene gardens, and vibrant geisha districts. In spring, the city transforms into a pink wonderland as cherry blossoms bloom across historic sites like Kiyomizu-dera and Fushimi Inari Shrine. Whether you’re strolling through bamboo forests in Arashiyama or enjoying a traditional tea ceremony, Kyoto offers an immersive experience into Japan’s rich heritage.",
    avgRating: 4.5,
    photo: tourImg12,
    featured: false,
  },
];

export default tours;
