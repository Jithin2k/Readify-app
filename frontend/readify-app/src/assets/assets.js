import book1 from "./book1.jpg";
import book2 from "./book2.jpg";
import book3 from "./book3.jpg";
import book4 from "./book4.jpg";
import book5 from "./book5.jpg";
import book6 from "./book6.jpg";
import book7 from "./book7.jpg";
import book8 from "./book8.jpg";
import book9 from "./book9.jpg";
import book10 from "./book10.jpg";
import book11 from "./book11.jpg";
import book12 from "./book12.jpg";
import book13 from "./book13.jpg";
import book14 from "./book14.jpg";
import book15 from "./book15.jpg";
import book16 from "./book16.jpg";
import book17 from "./book17.jpg";
import book18 from "./book18.jpg";
import book19 from "./book19.jpg";
import book20 from "./book20.jpg";
import book21 from "./book21.jpg";
import book22 from "./book22.jpg";
import book23 from "./book23.jpg";
import book24 from "./book24.jpg";
import book25 from "./book25.jpg";
import book26 from "./book26.jpg";
import book27 from "./book27.jpg";
import book28 from "./book28.jpg";
import book29 from "./book29.jpg";
import book30 from "./book30.jpg";

import logo from "./Logo-Readify.png";
import hero from "./hero.jpg"

export const assests = {
  logo,
  hero
}

export const books = [
  {
    id: 1,
    name: "Atomic Habits",
    author: "James Clear",
    description:
      "Atomic Habits is a practical guide on how tiny changes can produce remarkable results. James Clear explains the science of habit formation and how small adjustments in our daily routines compound into massive life improvements. With strategies to build better habits, break bad ones, and master the little behaviors that lead to success, this book empowers readers to design systems that make success inevitable.",
    price: 18.99,
    category: "Productivity",
    bestseller: true,
    image:book1
  },
  {
    id: 2,
    name: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    description:
      "This classic self-help book presents seven timeless principles for achieving effectiveness in personal and professional life. Stephen Covey emphasizes proactive living, prioritizing what matters most, and aligning actions with deeply held values. With real-life examples and actionable strategies, the book has helped millions lead more balanced, meaningful, and successful lives.",
    price: 20.5,
    category: "Productivity",
    bestseller: true,
    image:book3
  },
  {
    id: 3,
    name: "Free to Focus",
    author: "Michael Hyatt",
    description:
      "Free to Focus offers a productivity system designed to help individuals reclaim their time and concentrate on their most important tasks. Michael Hyatt outlines a step-by-step plan to reduce overwhelm, cut through distractions, and increase focus. By combining mindset shifts with practical tools, the book shows readers how to achieve more while doing less.",
    price: 16.75,
    category: "Productivity",
    bestseller: false,
    image:book4
  },
  {
    id: 4,
    name: "Smarter Faster Better",
    author: "Charles Duhigg",
    description:
      "Smarter Faster Better explores the science of productivity and the factors that drive performance. Charles Duhigg combines research, case studies, and storytelling to reveal how motivation, decision-making, and innovation shape success. The book equips readers with tools to think differently and make better choices in work and life.",
    price: 17.25,
    category: "Productivity",
    bestseller: false,
    image:book5
  },
  {
    id: 5,
    name: "The 48 Laws of Power",
    author: "Robert Greene",
    description:
      "The 48 Laws of Power is a bold manual for those who seek to understand and wield power effectively. Robert Greene distills lessons from history, philosophy, and strategy to present timeless laws for gaining and maintaining influence. Though controversial, the book remains a bestseller for its unapologetic insights into human behavior and power dynamics.",
    price: 22.99,
    category: "Self-Help",
    bestseller: true,
    image:book6
  },
  {
    id: 6,
    name: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    description:
      "This influential book explores the hidden potential of the subconscious mind and its role in shaping our lives. Joseph Murphy explains how positive thinking, visualization, and affirmations can unlock success, health, and happiness. Through practical techniques and spiritual wisdom, the book shows readers how to harness the power within themselves.",
    price: 15.25,
    category: "Self-Help",
    bestseller: true,
    image:book7
  },
  {
    id: 7,
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description:
      "Mark Manson challenges the traditional self-help narrative with a raw and honest approach to living a meaningful life. Instead of endless positivity, he encourages embracing struggles and focusing only on what truly matters. With humor and blunt truths, this book resonates with those seeking authenticity over perfection.",
    price: 19.99,
    category: "Self-Help",
    bestseller: true,
    image:book8
  },
  {
    id: 8,
    name: "Eat That Frog!",
    author: "Brian Tracy",
    description:
      "Eat That Frog! provides simple but powerful advice on overcoming procrastination and increasing productivity. Brian Tracy introduces the concept of tackling the most challenging task—the 'frog'—first to build momentum and achieve more. Packed with practical tips, the book is a roadmap for effective time management.",
    price: 14.5,
    category: "Self-Help",
    bestseller: false,
    image:book9
  },
  {
    id: 9,
    name: "The Power of Now",
    author: "Eckhart Tolle",
    description:
      "The Power of Now is a spiritual guide that teaches the importance of living fully in the present moment. Eckhart Tolle explores the concepts of mindfulness, consciousness, and detachment from the ego. This book has transformed the lives of readers worldwide with its message of peace and awareness.",
    price: 18.5,
    category: "Self-Help",
    bestseller: true,
    image:book10
  },
  {
    id: 10,
    name: "The Psychology of Money",
    author: "Morgan Housel",
    description:
      "The Psychology of Money reveals how emotions and behavior play a greater role in financial success than knowledge alone. Morgan Housel shares timeless lessons on greed, wealth, and happiness through engaging stories. The book emphasizes the importance of patience, humility, and long-term thinking in building financial security.",
    price: 21.0,
    category: "Finance",
    bestseller: true,
    image:book11
  },
  {
    id: 11,
    name: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description:
      "Rich Dad Poor Dad contrasts the financial philosophies of two father figures and highlights the importance of financial literacy. Robert Kiyosaki explains how money works, the power of investing, and the mindset shifts needed for wealth creation. This book has become a cornerstone for personal finance education worldwide.",
    price: 17.75,
    category: "Finance",
    bestseller: true,
    image:book12
  },
  {
    id: 12,
    name: "I Will Teach You to Be Rich",
    author: "Ramit Sethi",
    description:
      "Ramit Sethi provides a practical, no-nonsense guide to managing personal finances in a simple and effective way. From budgeting and saving to investing and automation, the book offers a six-week plan for financial confidence. Written with humor and clarity, it appeals especially to young professionals starting their financial journey.",
    price: 16.5,
    category: "Finance",
    bestseller: false,
    image:book13
  },
  {
    id: 13,
    name: "The Intelligent Investor",
    author: "Benjamin Graham",
    description:
      "Known as the bible of value investing, The Intelligent Investor offers timeless financial wisdom. Benjamin Graham emphasizes principles of investing with safety margins, risk management, and disciplined strategies. This classic has guided countless investors, including Warren Buffett, toward long-term success in the stock market.",
    price: 24.99,
    category: "Finance",
    bestseller: true,
    image:book14
  },
  {
    id: 14,
    name: "Your Money or Your Life",
    author: "Vicki Robin",
    description:
      "This book challenges readers to transform their relationship with money and life. Vicki Robin provides a nine-step program to align spending with personal values and achieve financial independence. With a focus on mindfulness and intentional living, it inspires readers to seek fulfillment beyond material wealth.",
    price: 15.99,
    category: "Finance",
    bestseller: false,
    image:book15
  },
  {
    id: 15,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A classic of modern American literature, To Kill a Mockingbird explores themes of racial injustice and moral growth. Through the eyes of young Scout Finch, the novel portrays the struggles of her father, Atticus Finch, as he defends an innocent Black man in the Deep South. It remains a profound commentary on humanity and compassion.",
    price: 14.25,
    category: "Fiction",
    bestseller: true,
    image:book16
  },
  {
    id: 16,
    name: "1984",
    author: "George Orwell",
    description:
      "1984 is a dystopian masterpiece that depicts a totalitarian world of surveillance, censorship, and control. George Orwell warns of the dangers of absolute power and the erosion of truth. With its chilling vision, the novel remains relevant as a reflection on freedom, privacy, and resistance.",
    price: 13.5,
    category: "Fiction",
    bestseller: true,
    image:book17
  },
  {
    id: 17,
    name: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "The Alchemist tells the story of Santiago, a shepherd boy who embarks on a journey to find his personal legend. Paulo Coelho weaves a philosophical tale about dreams, destiny, and the pursuit of happiness. Its universal message of self-discovery has inspired millions around the world.",
    price: 12.99,
    category: "Fiction",
    bestseller: true,
    image:book18
  },
  {
    id: 18,
    name: "The Kite Runner",
    author: "Khaled Hosseini",
    description:
      "Set in Afghanistan, The Kite Runner is a powerful story of friendship, betrayal, and redemption. Khaled Hosseini explores themes of guilt, forgiveness, and the complex bonds between fathers and sons. The novel has touched readers globally with its emotional depth and cultural insight.",
    price: 18.75,
    category: "Fiction",
    bestseller: true,
    image:book19
  },
  {
    id: 19,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "The Great Gatsby is a tale of love, wealth, and the American Dream during the Jazz Age. Through the mysterious figure of Jay Gatsby, Fitzgerald critiques materialism and the illusion of happiness. The novel’s lyrical prose and tragic themes have cemented it as a literary classic.",
    price: 11.99,
    category: "Fiction",
    bestseller: true,
    image:book20
  },
  {
    id: 20,
    name: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "Pride and Prejudice is a witty romantic novel that explores manners, marriage, and social class in 19th-century England. The spirited Elizabeth Bennet navigates love and prejudice in her evolving relationship with the proud Mr. Darcy. With its sharp humor and timeless romance, it remains a beloved classic.",
    price: 13.25,
    category: "Romance",
    bestseller: true,
    image:book21
  },
  {
    id: 21,
    name: "Me Before You",
    author: "Jojo Moyes",
    description:
      "Me Before You is a deeply emotional romance about Louisa Clark, a young woman who becomes the caretaker of Will Traynor, a man left paralyzed after an accident. As their bond grows, the novel explores love, loss, and the difficult choices we face. Jojo Moyes delivers a moving story that lingers long after the last page.",
    price: 14.99,
    category: "Romance",
    bestseller: true,
    image:book22
  },
  {
    id: 22,
    name: "It Ends With Us",
    author: "Colleen Hoover",
    description:
      "This powerful romance novel tackles difficult themes of love, resilience, and domestic abuse. Lily Bloom’s relationship with Ryle Kincaid forces her to confront painful truths while navigating her emotions for a childhood friend. Colleen Hoover’s raw storytelling makes this a compelling and unforgettable read.",
    price: 15.5,
    category: "Romance",
    bestseller: true,
    image:book23
  },
  {
    id: 23,
    name: "Summer Romance",
    author: "Fictional Author",
    description:
      "Summer Romance is a heartwarming love story set against the backdrop of sunny beaches and warm nights. It captures the fleeting magic of summer flings and the joy of unexpected connections. With themes of hope, passion, and discovery, it’s a lighthearted read perfect for lazy afternoons.",
    price: 12.5,
    category: "Romance",
    bestseller: false,
    image:book24
  },
  {
    id: 24,
    name: "Reminders of Him",
    author: "Colleen Hoover",
    description:
      "Reminders of Him follows a young mother seeking redemption after being released from prison. Determined to reunite with her daughter, she faces resistance from those she hurt most. Colleen Hoover delivers a poignant story of forgiveness, second chances, and the complexities of love.",
    price: 16.75,
    category: "Romance",
    bestseller: true,
    image:book25
  },
  {
    id: 25,
    name: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    description:
      "The first book in the Harry Potter series introduces readers to the magical world of Hogwarts. Harry, an orphan who discovers he is a wizard, begins his journey of friendship, adventure, and courage. Filled with wonder and imagination, this book has become a global phenomenon.",
    price: 22.0,
    category: "Fantasy",
    bestseller: true,
    image:book26
  },
  {
    id: 26,
    name: "Peter Pan",
    author: "J.M. Barrie",
    description:
      "Peter Pan is the timeless tale of the boy who never grows up. Set in the magical world of Neverland, it follows Peter, Wendy, and the Lost Boys on adventures filled with pirates, fairies, and dreams of eternal youth. The story continues to enchant both children and adults alike.",
    price: 10.99,
    category: "Fantasy",
    bestseller: true,
    image:book27
  },
  {
    id: 27,
    name: "Alice in Wonderland",
    author: "Lewis Carroll",
    description:
      "Alice in Wonderland is a whimsical adventure about a young girl who falls down a rabbit hole into a fantastical world. With curious characters like the Cheshire Cat, Mad Hatter, and Queen of Hearts, it blends imagination with nonsense. The story has become a beloved classic of children’s literature.",
    price: 11.5,
    category: "Fantasy",
    bestseller: true,
    image:book28
  },
  {
    id: 28,
    name: "Percy Jackson and the Olympians: The Lightning Thief",
    author: "Rick Riordan",
    description:
      "The Lightning Thief kicks off the Percy Jackson series, where Greek mythology collides with the modern world. Percy discovers he is a demigod and embarks on an epic quest with his friends. Full of adventure, humor, and mythology, this book has captivated young readers everywhere.",
    price: 18.25,
    category: "Fantasy",
    bestseller: true,
    image:book29
  },
  {
    id: 29,
    name: "Winnie-the-Pooh",
    author: "A.A. Milne",
    description:
      "Winnie-the-Pooh tells the gentle adventures of a lovable bear and his friends in the Hundred Acre Wood. With themes of friendship, kindness, and imagination, these tales have delighted generations of children. Its simple yet profound stories remain a cornerstone of classic children’s literature.",
    price: 9.99,
    category: "Fantasy",
    bestseller: true,
    image:book30
  },

  {
    id: 30,
    name: "Do It Today",
    author: "Darius Foroux",
    description:
      "Do It Today is a motivational and practical guide that helps readers stop procrastinating and start taking meaningful action. Darius Foroux shares strategies on time management, building discipline, and overcoming excuses that keep people stuck. With simple, actionable steps, the book empowers readers to focus on progress and achieve their goals.",
    price: 14.99,
    category: "Productivity",
    bestseller: false,
    image:book5
  },
];
