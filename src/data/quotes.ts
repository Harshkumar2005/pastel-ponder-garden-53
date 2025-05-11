
export interface Quote {
  id: number;
  text: string;
  tags: string[];
  explanation?: string;
  colorClass: string;
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    tags: ["inspiration"],
    explanation: "This quote reminds us that our greatest obstacle isn't external circumstances but our own hesitations and self-doubt. When we believe in possibilities, we create them.",
    colorClass: "bg-pastel-lavender"
  },
  {
    id: 2,
    text: "Be yourself; everyone else is already taken.",
    tags: ["wisdom"],
    explanation: "A call to authenticity in a world of conformity. This quote celebrates the unique perspective and gifts that only you can offer when you embrace your true self.",
    colorClass: "bg-pastel-peach"
  },
  {
    id: 3,
    text: "Act as if what you do makes a difference. It does.",
    tags: ["positivity"],
    explanation: "This quote speaks to the ripple effect of our actions. Even when we can't see the impact, every positive action sends waves of change into the world.",
    colorClass: "bg-pastel-mint"
  },
  {
    id: 4,
    text: "Do what you can, with what you have, where you are.",
    tags: ["motivation"],
    explanation: "This quote celebrates starting from exactly where you are. It's about using your current resources and situation as a launching point rather than waiting for perfect conditions.",
    colorClass: "bg-pastel-peach"
  },
  {
    id: 5,
    text: "You miss 100% of the shots you don't take.",
    tags: ["success"],
    explanation: "This quote reminds us that failure is not the opposite of success but a stepping stone to it. The greatest regret comes from opportunities unlived, not from trying and missing.",
    colorClass: "bg-pastel-blue"
  },
  {
    id: 6,
    text: "Life is what happens when you're busy making other plans.",
    tags: ["optimism"],
    explanation: "A reminder to be present in each moment. This quote encourages us to find beauty in the unplanned detours that often become the most meaningful parts of our journey.",
    colorClass: "bg-pastel-pink"
  },
  {
    id: 7,
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    tags: ["optimism"],
    explanation: "This quote uses the metaphor of light and shadow to remind us that our focus determines our perspective. When we orient ourselves toward positivity, negativity naturally falls away.",
    colorClass: "bg-pastel-lavender"
  },
  {
    id: 8,
    text: "The only way to do great work is to love what you do.",
    tags: ["work"],
    explanation: "This quote speaks to the power of passion as the ultimate fuel for excellence. When we connect with the deeper purpose in our work, quality becomes inevitable rather than forced.",
    colorClass: "bg-pastel-peach"
  },
  {
    id: 9,
    text: "It is never too late to be what you might have been.",
    tags: ["change"],
    explanation: "A powerful reminder that reinvention is always possible. This quote challenges the notion that our past defines our future or that opportunity has an expiration date.",
    colorClass: "bg-pastel-pink"
  },
  {
    id: 10,
    text: "Happiness depends upon ourselves.",
    tags: ["happiness"],
    explanation: "This quote reminds us that joy is an inside job. Rather than seeking happiness in external circumstances, true contentment comes from cultivating it within.",
    colorClass: "bg-pastel-lavender"
  },
  {
    id: 11,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    tags: ["encouragement"],
    explanation: "This quote reframes both success and failure as temporary states rather than permanent identities. It's a reminder that persistence—showing up again and again—is the true measure of character.",
    colorClass: "bg-pastel-peach"
  },
  {
    id: 12,
    text: "The best way to predict the future is to create it.",
    tags: ["inspiration", "motivation"],
    explanation: "Rather than passively waiting for circumstances to change, this quote empowers us to be active architects of our own destiny through intentional action and vision.",
    colorClass: "bg-pastel-yellow"
  }
];
