/*export interface Quote {
  id: number;
  text: string;
  tags: string[];
  explanation?: string;
  colorClass: string;
}

export const quotes: Quote[] = [
  
];
*/

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
    tags: ["inspiration"],
    explanation: "Rather than passively waiting for circumstances to change, this quote empowers us to be active architects of our own destiny through intentional action and vision.",
    colorClass: "bg-pastel-yellow"
  },
  {
    id: 13,
    text: "The journey of a thousand miles begins with a single step.",
    tags: ["motivation"],
    explanation: "Lao Tzu's ancient wisdom encapsulates the fundamental truth about achieving any significant goal: initiation. Overwhelm often stems from contemplating the entirety of a large task. This proverb breaks it down, emphasizing that no matter how daunting the destination or how long the path, every great endeavor starts with one decisive, initial action. It encourages us to overcome inertia and the fear of the unknown by focusing on the immediate, manageable first step. This single act builds momentum, creates a foundation for further progress, and transforms an abstract ambition into a tangible pursuit. It reminds us that grand achievements are not instantaneous but are the cumulative result of consistent, small efforts over time. Therefore, instead of being paralyzed by the scale of our aspirations, we should channel our energy into taking that crucial first step, trusting that it will lead to the next and ultimately to our desired outcome. This mindset is key.",
    colorClass: "bg-pastel-mint"
  },
  {
    id: 14,
    text: "Strive not to be a success, but rather to be of value.",
    tags: ["wisdom"],
    explanation: "Albert Einstein's insightful counsel redirects our focus from the mere pursuit of personal acclaim or material wealth to a more profound form of achievement: creating value. He suggests that true success is a byproduct of contributing meaningfully to others or to a cause larger than oneself. Chasing conventional success can be fleeting, but striving to be of value fosters purpose, fulfillment, and lasting impact. This involves identifying one's unique talents and applying them in ways that benefit society, solve problems, or enrich lives. By prioritizing value creation, an individual not only enhances their own character and skills but also builds a legacy that transcends personal gain. This perspective encourages a shift from self-centered ambition to a service-oriented approach, where the ultimate measure of a life well-lived is the positive difference made in the world, forging authentic success.",
    colorClass: "bg-pastel-yellow"
  },
  {
    id: 15,
    text: "The mind is everything. What you think you become.",
    tags: ["mindset"],
    explanation: "This powerful assertion attributed to Buddha highlights the supreme importance of our thoughts in shaping our reality and character. It posits that our mental landscape—our beliefs, attitudes, and recurring thought patterns—directly influences our actions, experiences, and ultimately, who we evolve into. If we cultivate thoughts of positivity, resilience, and compassion, our actions will reflect these qualities, leading to a more fulfilling life. Conversely, dwelling on negativity, fear, or self-limitation can create a self-fulfilling prophecy of struggle. This principle underscores the need for mindful awareness and conscious direction of our thoughts. By understanding that our inner world sculpts our outer world, we are empowered to take responsibility for our mental content, actively choosing to nurture constructive thoughts aligned with our desired self and aspirations, thus driving true personal transformation through mental discipline.",
    colorClass: "bg-pastel-pink"
  },
  {
    id: 16,
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    tags: ["growth"],
    explanation: "Zig Ziglar's wisdom shifts the focus from the external rewards of goal achievement to the internal transformation that occurs during the pursuit. While accomplishing a goal brings satisfaction and tangible outcomes, the true, lasting value lies in the personal development—the resilience, discipline, knowledge, and strength of character gained along the way. The process of overcoming obstacles, learning from failures, and pushing beyond perceived limits fundamentally changes us for the better. This perspective encourages us to view challenges not as mere roadblocks but as opportunities for growth. The person we become—more capable, confident, and wise—is a far greater prize than the goal itself. It emphasizes that the journey shapes us profoundly, making personal evolution the ultimate success metric, fostering a mindset that values continuous self-improvement over mere trophy collection in life's endeavors.",
    colorClass: "bg-pastel-blue"
  },
  {
    id: 17,
    text: "Believe you can and you're halfway there.",
    tags: ["belief"],
    explanation: "Theodore Roosevelt's famous quote powerfully emphasizes the critical role of self-belief in the journey towards any achievement. It suggests that the internal conviction of one's ability to succeed is a monumental first step, often constituting half the battle. This belief isn't about ignoring challenges but about fostering a mindset that is resilient and solution-oriented. When you genuinely believe in your capacity to overcome obstacles and reach your objective, you unlock inner resources like determination, creativity, and perseverance. This positive mental state influences your actions, making you more likely to take necessary risks and persist through setbacks. It's a foundational element that fuels motivation and attracts opportunities. Without this core belief, even the most well-laid plans can falter. Thus, cultivating a strong sense of self-efficacy is paramount to turning aspirations into tangible realities, acting as a powerful catalyst for success.",
    colorClass: "bg-pastel-lavender"
  },
  {
    id: 18,
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    tags: ["perseverance"],
    explanation: "Thomas A. Edison's iconic statement reframes the concept of failure as an integral part of the process of discovery and innovation. Instead of viewing setbacks as defeats, he saw them as valuable learning experiences, each 'non-working' attempt bringing him closer to a solution. This perspective is crucial for anyone engaged in creative endeavors, scientific research, or any challenging pursuit where the path to success is not linear. It highlights the importance of resilience, experimentation, and maintaining a growth mindset. By categorizing unsuccessful attempts as data points rather than personal failings, we can detach our ego from the outcome and continue to explore possibilities with curiosity and determination. This mindset fosters an environment where taking risks is encouraged, and learning from every outcome, positive or negative, becomes the primary objective, ultimately leading to breakthrough and mastery through persistent effort.",
    colorClass: "bg-pastel-peach"
  },
  {
    id: 19,
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    tags: ["life"],
    explanation: "Oscar Wilde's poignant observation draws a sharp distinction between merely going through the motions of life and truly experiencing its richness and depth. 'Existing' implies a passive state, perhaps characterized by routine, conformity, or a lack of engagement with one's passions and potential. In contrast, 'living' suggests an active, conscious embrace of life in all its facets—its joys, sorrows, challenges, and beauty. It means pursuing dreams, fostering meaningful connections, seeking knowledge, and daring to be authentic. Wilde encourages us to break free from the mundane and to cultivate a life filled with purpose, curiosity, and genuine feeling. This quote serves as a powerful call to action: to not let our days be defined by mere survival or societal expectations, but to actively craft a vibrant, engaged existence that reflects our deepest selves and fully explores the human experience before our time is up.",
    colorClass: "bg-pastel-mint"
  },
  {
    id: 20,
    text: "That which does not kill us makes us stronger.",
    tags: ["resilience"],
    explanation: "Friedrich Nietzsche's famous aphorism speaks to the transformative power of adversity. It suggests that surviving significant challenges, hardships, or traumas can ultimately lead to increased psychological and emotional fortitude. While the experience itself may be painful, the process of navigating and overcoming it can forge resilience, wisdom, and a deeper understanding of one's own capabilities. This doesn't mean seeking out suffering, but rather recognizing that difficulties, when confronted and processed constructively, can serve as catalysts for profound personal growth. The strength gained is not just about enduring future hardships but also about developing a greater appreciation for life and a more robust sense of self. It's a testament to the human capacity to adapt, learn, and emerge from trials not only intact but often more capable and empowered than before, turning scars into symbols of endurance and growth throughout one's journey.",
    colorClass: "bg-pastel-yellow"
  },
  {
    id: 21,
    text: "The purpose of our lives is to be happy.",
    tags: ["happiness"],
    explanation: "The Dalai Lama's simple yet profound statement posits that the fundamental aim of human existence is the pursuit and attainment of happiness. This isn't necessarily about fleeting pleasures, but a deeper, more enduring state of contentment, peace, and well-being. He suggests that all our actions, consciously or unconsciously, are geared towards achieving this state and avoiding suffering. This perspective encourages us to cultivate inner qualities like compassion, kindness, and mindfulness, as these are seen as key ingredients for genuine happiness, rather than relying solely on external circumstances or material possessions. It shifts the focus inward, empowering individuals to take responsibility for their own emotional landscape. By understanding that happiness is an attainable skill and a core purpose, we can orient our lives, choices, and efforts towards practices and mindsets that foster lasting joy and fulfillment for ourselves and others around us.",
    colorClass: "bg-pastel-pink"
  },
  {
    id: 22,
    text: "Get busy living or get busy dying.",
    tags: ["action"],
    explanation: "This stark and powerful line, famously from Stephen King's 'The Shawshank Redemption,' serves as an urgent call to embrace life actively and purposefully. It presents a binary choice: either engage fully with the opportunities and experiences life offers, or succumb to a passive, stagnant existence that is akin to a slow demise of spirit and potential. 'Getting busy living' implies making conscious choices, pursuing goals, facing fears, and making the most of one's time. 'Getting busy dying,' conversely, suggests resignation, apathy, and allowing life to simply pass by without meaningful engagement. The quote's impact lies in its directness, forcing introspection about how one is spending their precious time. It's a profound motivator to break free from inertia, to seize the day, and to strive for a life rich with meaning, action, and growth rather than succumbing to a quiet, unfulfilled decline that leads to regret.",
    colorClass: "bg-pastel-blue"
  },
  {
    id: 23,
    text: "You only live once, but if you do it right, once is enough.",
    tags: ["life"],
    explanation: "Mae West's witty and profound quote encapsulates a philosophy of living life to its fullest potential. The phrase 'you only live once' (YOLO) is often used to justify impulsive behavior, but West's addition—'if you do it right, once is enough'—imbues it with a deeper meaning. 'Doing it right' suggests a life lived with purpose, authenticity, passion, and a lack of regret. It implies making conscious choices, pursuing what truly matters, embracing experiences, and leaving a positive mark. This doesn't mean a life devoid of mistakes, but rather one where lessons are learned and growth is constant. The idea is that a single, well-lived life, rich in meaning and fulfillment, can be so complete that the thought of needing another chance doesn't arise. It’s an encouragement to be bold, be true to oneself, and to make every moment count, crafting a singular existence that is deeply satisfying and thoroughly complete.",
    colorClass: "bg-pastel-lavender"
  },
  {
    id: 24,
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    tags: ["perseverance"],
    explanation: "Thomas A. Edison's observation highlights a common pitfall on the path to achievement: premature surrender. Often, success is just beyond the point where frustration or exhaustion tempts one to quit. This quote serves as a crucial reminder of the importance of persistence, especially when faced with prolonged challenges or a lack of visible progress. The critical moment of breakthrough might be imperceptibly near when the urge to give up is strongest. Those who abandon their efforts too soon may never know how close they were to realizing their goals. It underscores the need for resilience, faith in one's endeavor, and the courage to push through 'the dip'—that difficult phase before success materializes. This insight encourages us to re-evaluate moments of despair, urging one more attempt, one more push, as that could be the very action that tips the scales from failure to triumph, a testament to enduring spirit.",
    colorClass: "bg-pastel-peach"
  },
  {
    id: 25,
    text: "If you want to live a happy life, tie it to a goal, not to people or things.",
    tags: ["happiness"],
    explanation: "Albert Einstein's advice offers a pathway to a more stable and self-determined form of happiness. By anchoring one's happiness to the pursuit and achievement of personal goals, individuals cultivate a sense of purpose and accomplishment that is internally driven and less susceptible to external volatilities. Relying on other people or material possessions for happiness can lead to disappointment, as people can change or leave, and things can be lost or lose their appeal. Goals, however, provide a consistent direction and a source of intrinsic motivation. Working towards something meaningful offers ongoing satisfaction and growth. This doesn't negate the importance of relationships or the enjoyment of possessions but suggests that the core foundation of happiness should be built on something more resilient and within one's own control: personal aspirations and the journey towards them, fostering a robust internal locus of control and self-reliance for one's well-being.",
    colorClass: "bg-pastel-mint"
  },
  {
    id: 26,
    text: "Never let the fear of striking out keep you from playing the game.",
    tags: ["courage"],
    explanation: "Babe Ruth's timeless wisdom, rooted in his baseball career, extends far beyond sports, offering a powerful lesson about confronting fear and embracing opportunities in life. 'Striking out' symbolizes failure or making mistakes, a natural part of any endeavor. The 'game' represents life's various challenges and opportunities for growth and achievement. This quote urges us not to be paralyzed by the possibility of failure to the extent that we avoid participating altogether. The fear of imperfection or rejection can be a significant barrier to trying new things, pursuing ambitions, or expressing ourselves. Ruth reminds us that the potential for success and learning only exists if we are willing to step up to the plate and take a swing. Avoiding the risk of failure also means forfeiting the chance for triumph and valuable experience. It's an encouragement to embrace courage, accept imperfection, and engage fully with life's possibilities despite inherent risks.",
    colorClass: "bg-pastel-yellow"
  },
  {
    id: 27,
    text: "Money and success don’t change people; they merely amplify what is already there.",
    tags: ["character"],
    explanation: "Will Smith's insightful observation challenges the common notion that wealth and achievement fundamentally alter a person's core nature. Instead, he suggests that these external factors act as magnifiers, bringing pre-existing character traits—both positive and negative—to the forefront and giving them greater expression. If someone is inherently kind and generous, success might provide them with more resources to demonstrate these qualities on a larger scale. Conversely, if underlying tendencies towards arrogance or selfishness exist, money and power can exacerbate them. This perspective underscores the importance of cultivating strong inner values and self-awareness irrespective of one's external circumstances. True character is revealed, not created, by success. It serves as a reminder that external achievements don't define who you are; rather, they provide a larger stage upon which your intrinsic self is more visibly displayed to the world around you.",
    colorClass: "bg-pastel-pink"
  },
  {
    id: 28,
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    tags: ["authenticity"],
    explanation: "Steve Jobs' poignant reminder from his Stanford commencement address is a powerful call for authenticity and self-direction. It highlights the finite nature of our existence, urging us to prioritize living in alignment with our own values, passions, and aspirations, rather than conforming to external expectations or imitating others. 'Living someone else's life' can mean succumbing to societal pressures, parental desires, or peer influence, leading to a path that isn't truly our own and ultimately results in regret. Jobs encourages introspection to discover one's unique calling and the courage to pursue it, even if it diverges from conventional paths. This involves making conscious choices about how we spend our precious time and energy, focusing on what genuinely gives us meaning and fulfillment. It’s an empowering message to take ownership of our life's narrative and to live with intention and integrity, making the most of our limited span on this earth.",
    colorClass: "bg-pastel-blue"
  },
  {
    id: 29,
    text: "Not how long, but how well you have lived is the main thing.",
    tags: ["life"],
    explanation: "Seneca's Stoic wisdom emphasizes the quality of life over its mere duration. This quote challenges the common preoccupation with longevity, suggesting that a life's value is measured not by the number of years lived, but by the richness, virtue, and purposefulness with which those years were filled. 'Living well' implies a life of meaning, contribution, learning, and ethical conduct. It's about the depth of experiences, the strength of character developed, the positive impact made on others, and the pursuit of wisdom. A shorter life lived with intensity, integrity, and fulfillment can be far more significant than a long life lived superficially or without genuine engagement. This perspective encourages us to focus on making each day count, on cultivating our inner selves, and on contributing to the world in meaningful ways, thereby crafting a legacy defined by substance rather than simply by the passage of time, leaving a lasting impact.",
    colorClass: "bg-pastel-lavender"
  },
  {
    id: 30,
    text: "If life were predictable it would cease to be life, and be without flavor.",
    tags: ["adventure"],
    explanation: "Eleanor Roosevelt's insightful quote celebrates the inherent unpredictability of life as a source of its richness and vitality. She suggests that if every event were foreseeable, life would lose its excitement, spontaneity, and the very essence that makes it engaging. The 'flavor' of life comes from its surprises, challenges, and unexpected turns, which push us to adapt, grow, and discover hidden strengths. While predictability might offer a sense of security, it could also lead to monotony and a lack of dynamism. This perspective encourages embracing uncertainty not as a threat, but as an integral part of a vibrant existence. It invites us to approach the unknown with curiosity and resilience, understanding that it is often in the unplanned moments and unforeseen detours that we find the most profound learning, joy, and meaning. It's a call to appreciate the dynamic, ever-changing nature of our journey through life, finding beauty in its inherent chaos.",
    colorClass: "bg-pastel-peach"
  }
]
