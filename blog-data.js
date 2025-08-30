// Blog posts data
const blogPosts = [
    {
        id: 'illusion-of-beauty',
        title: 'The Illusion of Beauty',
        date: '2025-08-30',
        category: 'Philosophy',
        tags: ['nature', 'beauty', 'illusion', 'philosophy', 'arpanmukherjee'],
        image: 'nature.jpg',
        excerpt: 'Looking out from the window of a moving train, everything appeared so beautiful and peaceful. But then I thought, this beauty often looks good only from afar...',
        content: `
            <p>Looking out from the window of a moving train, everything appeared so beautiful and peaceful. The sunlight fell on the distant mountains, making them sparkle and appear incredibly captivating. Green trees and gentle slopes stretched so gracefully that the whole scene seemed like a dream.</p>
            
            <p>But then I thought, this beauty often looks good only from afar.</p>
            
            <h4>The Reality Behind Beauty</h4>
            
            <p>When you get closer, those same beautiful mountains have dangerous rocks and cliffs on their surface. The fog hides the paths, making it hard to see anything clearly. One wrong step, and there is a risk of falling. The view that brings peace and joy from a distance is filled with risks and difficulties up close.</p>
            
            <p>Life is much the same. From far away, someone's success, happiness, or relationships may seem perfect. But when you look closer, the real truth comes out — struggles, sacrifices, and challenges.</p>
            
            <h4>The Hidden Struggles</h4>
            
            <p>A shining career may be the result of many sleepless nights. Someone who appears happy might be dealing with loneliness. Things that seem simple and beautiful from the outside are often complex and challenging on the inside.</p>
            
            <p>True understanding comes when we have the courage to look at things up close. It's important to remember that not everything that glitters is gold, and behind every beauty, there is hidden struggle.</p>
            
            <h4>The Lesson</h4>
            
            <p>As the train moved forward, I left the view behind, but the lesson stayed with me — what we see in life is not always the truth. Real beauty and understanding lie beneath the surface. We should not trust only what shines from afar but seek to understand the reality behind it.</p>
        `
    },
    {
        id: 'god-is-dead',
        title: 'God is Dead',
        date: '2025-08-28',
        category: 'Philosophy',
        tags: ['philosophy', 'humanity', 'arpanmukherjeeblog'],
        image: 'god is dead.jpeg',
        excerpt: 'When I say "God is dead," I am not speaking of the gods people worship in temples, mosques, or churches. I am speaking of my God Humanity...',
        content: `
            <p>When I say "God is dead," I am not speaking of the gods people worship in temples, mosques, or churches. I am speaking of my God Humanity. For me, humanity has always been the purest form of divinity. It is not something distant in the sky, it lives here, between us, in our actions, in the way we treat each other.</p>
            
            <p>For me, God is when someone chooses kindness over cruelty. God is when a stranger helps another without asking for anything in return.</p>
            
            <p>God is when love, empathy, and care flow naturally between people. That is my God. That is humanity.</p>
            
            <p>But today, I feel like this God is dying.</p>
            
            <h4>The Death I Witness</h4>
            
            <p>When I see people ignoring someone hungry on the roadside but offering food in front of stone idols, I feel my God dying.</p>
            
            <p>When I see hatred spread faster than compassion, I feel my God collapsing.</p>
            
            <p>When I see people more concerned about their image than about doing what's right, I feel my God buried under the noise.</p>
            
            <p>And so, when I say "God is dead," I mean that humanity the God I believe in is fading away from this world.</p>
            
            <h4>My Worship</h4>
            
            <p>I do not worship by lighting lamps or repeating mantras. My worship is in small acts helping someone, respecting someone, standing for what is right even if it is difficult. For me, these acts are more sacred than rituals, more powerful than prayers.</p>
            
            <p>But when I look around, I see fewer and fewer people walking this path. Humanity, my God, is treated as if it is no longer needed.</p>
            
            <h4>Can God Live Again?</h4>
            
            <p>Still, I don't believe this death is permanent. As long as one person chooses love over hate, as long as one person refuses to stay silent against injustice, as long as one person decides to be human in the truest sense my God will live again.</p>

            <p>Maybe that is my faith:
That even if the world forgets, even if humanity seems dead, it can rise again through us, through me, through you.</p>
        `
    },
    {
        id: 'productive-day-developer',
        title: 'Another Productive Day as a Self-Taught Developer 🚀',
        date: '2025-06-21',
        category: 'Tech',
        tags: ['tech', 'react', 'selftaught', 'arpanmukherjee'],
        excerpt: 'Today was one of those fulfilling days where learning and execution came together. As a self-taught developer, I\'m constantly trying to balance learning new things...',
        content: `
            <p>Today was one of those fulfilling days where learning and execution came together. As a self-taught developer, I'm constantly trying to balance learning new things and applying them in real projects. Here's what I accomplished today:</p>
            
            <h4>📚 Learned React Through Self-Study</h4>
            
            <p>I spent a few focused hours diving deeper into React.js — exploring state, props, and the basics of hooks. Instead of just watching tutorials, I made sure to build something practical. The hands-on part really helps things click.</p>
            
            <h4>🔨 Worked on a Serious Project</h4>
            
            <p>Beyond experiments and small tasks, I'm also working on a serious project — something meaningful and practical that I plan to ship in the near future. It's a web app that solves a real problem, and I'm building it piece by piece with purpose.</p>
            
            <h4>🔄 What I Learned</h4>
            
            <ul>
                <li>React becomes easier when you build while learning.</li>
                <li>Progress compounds — just show up daily.</li>
            </ul>
            
            <h4>🧠 Final Words</h4>
            
            <p>No fancy degree, no big team — just consistent effort, curiosity, and a deep love for building things.</p>
        `
    },
    {
        id: 'indrajeet-yamraj-samvad',
        title: 'Indrajeet – Yamraj Samvad',
        date: '2025-05-26',
        category: 'Literature',
        tags: ['literature', 'philosophy', 'hindi', 'arpanmukherjeeblog'],
        image: 'indrajeet.png',
        excerpt: 'धधक रही थी दिशाओं में ज्वाला, नभ में गूंजा गर्जन, कौन पुरुष था वह, जो मृत्यु को दे रहा था खुला आमंत्रण?',
        content: `
            <div class="hindi-content">
                <p>धधक रही थी दिशाओं में ज्वाला, नभ में गूंजा गर्जन,</p>
                <p>कौन पुरुष था वह, जो मृत्यु को दे रहा था खुला आमंत्रण?</p>
                
                <p>रथ का वह राक्षस आया था, जिसने इंद्र को था बांधा,</p>
                <p>मृत देह में भी आत्मा बोली – "मैं आज भी हूँ अग्निकांथा!</p>
                
                <h4>इंद्रजीत बोले</h4>
                
                <p>"नवनीत न था मेरा जीवन, तप और यज्ञ की ज्वाला था,</p>
                <p>पिता का अभिमान, लंका का प्रहरी, शौर्य मेरा उजियाला था।</p>
                
                <p>रण में जो थर्राए देव, वह मैं था – मेघनाद,</p>
                <p>मृत्यु आई, स्वीकार की – पर क्या है इसका न्यायिक आधार?</p>
                
                <p>रघुकुल के राम को धर्म कहा, मुझे अधर्म बतलाया,</p>
                <p>क्या पुत्रधर्म निभाना पाप था? क्या रावण का संग हराया?"</p>
                
                <h4>यमराज बोले</h4>
                
                <p>"रावणसुत! तू वीर था, पर वीरता कभी पूर्ण न होती,</p>
                <p>जब तक न हो साथ धर्म के, शक्ति अंधकार में खोती।</p>
                
                <p>तप किया तूने, यज्ञ किया, पर किसके लिए – पूछ ये सवाल</p>
                <p>तू बाण था, पर दिशा अधर्म की – वही बनी तेरा काल।</p>
                
                <p>धर्म वही जो सबके हित में, जो पीड़ित का सहारा,</p>
                <p>राम ना केवल रणधीर थे, वे थे सत्य का प्यारा।</p>
                
                <p>अधर्म से जो संग करे, चाहे जितना हो तेज,</p>
                <p>अंत में वह भी डूबता है – यही है काल का लेख।"</p>
                
                <h4>इंद्रजीत (थोड़ा व्यथित, किंतु अभी भी साहसी):</h4>
                
                <p>"मैं कभी पलटा नहीं, मृत्यु को देखा आँखों में,</p>
                <p>पर अब तुम्हारा न्याय सुनूँ, उस नाप-तोल की साँसों में।</p>
                
                <p>यदि अधर्म ही मेरा पथ था, तो क्या सब तप निष्फल थे?</p>
                <p>क्या मेरा वध ही उचित था, क्या सब व्रत निष्प्रभ थे?"</p>
                
                <h4>यमराज (सौम्य, न्यायमूर्ति के स्वर में):</h4>
                
                <p>"तप कभी व्यर्थ नहीं होता, न शौर्य मिटता है काल से,</p>
                <p>पर उसका फल वही पाता है, जो चले न्याय के हाल से।</p>
                
                <p>तुझे नर्क न दूँगा पुत्र, न ही दे सकता स्वर्ग अभी,</p>
                <p>तू जाएगा उस भूमि पर, जहाँ वीरगति शांति रही।</p>
                
                <p>वहाँ क्षत्रिय आत्माएँ मिलेंगी, जो रण में सच्चे थे,</p>
                <p>न छल से लड़े, न घृणा से, धर्म के रथ में रथी थे।</p>
                
                <p>पुनर्जन्म तेरा होगा फिर, पर इस बार कर निर्णय शुद्ध,</p>
                <p>शक्ति फिर मिलेगी तुझको, पर पथ हो धर्मबुद्ध।"</p>
                
                <p><em>[इंद्रजीत मौन – नेत्रों में स्वीकार, मुख पर तेज का हास।]</em></p>
                
                <p>न झुका कभी जो रण में, वह यम के सम्मुख झुका नहीं,</p>
                <p>पर समझ गया न्याय का पथ, और तेज से वह रुका नहीं।</p>
                
                <p>यमदूतों संग बढ़ा वह रथी, जिस पथ पर दीप्ती फैली थी,</p>
                <p>काल भी थम गया क्षण भर को, जब आत्मा एक वीर की चली थी।</p>
                
                <p class="author-signature"><strong>-अर्पण मुखर्जी</strong></p>
            </div>
        `
    },
    {
        id: 'taskumi-update',
        title: 'I Just Updated My Task Manager – Here\'s What\'s New in Taskumi!',
        date: '2025-04-30',
        category: 'Tech',
        tags: ['tech', 'ai', 'productivity', 'arpanmukherjeeblog'],
        image: 'taskmanager.png',
        excerpt: 'Hey everyone! 👋 I\'m super excited to share that I\'ve just rolled out a major update to my task management web app — Taskumi 🎯...',
        content: `
            <p>Hey everyone! 👋</p>
            
            <p>I'm super excited to share that I've just rolled out a major update to my task management web app — <strong>Taskumi 🎯</strong>. After weeks of design, coding, and debugging, Taskumi is now smarter, cleaner, and more productive than ever before.</p>
            
            <p>Let me walk you through what's new 👇</p>
            
            <h4>✨ What is Taskumi?</h4>
            
            <p>Taskumi is a smart task manager I built to help users stay organized, focused, and productive. It's designed to feel minimal yet powerful — balancing clean UI with useful features like tasks, notes, history, AI tools, and more.</p>
            
            <h4>🔧 What's New in This Update?</h4>
            
            <h5>✅ 1. Completely Redesigned User Interface</h5>
            
            <p>The layout is now more polished and user-friendly:</p>
            
            <ul>
                <li>Responsive sidebar with navigation</li>
                <li>Streamlined task and note sections</li>
                <li>Clean modals for adding tasks & notes</li>
                <li>Dark/light theme toggle 🌗</li>
            </ul>
            
            <h5>🧠 2. Built-In AI Tools Hub</h5>
            
            <p>I added a new section — <strong>AI Tools</strong> — that links directly to:</p>
            
            <ul>
                <li>ChatGPT</li>
                <li>Claude</li>
                <li>DeepSeek</li>
                <li>Google Gemini</li>
                <li>Microsoft Copilot</li>
                <li>Perplexity AI</li>
            </ul>
            
            <p>These tools help users research, brainstorm, and automate tasks with just a click.</p>
            
            <h5>💬 3. Task Assistant Chatbox</h5>
            
            <p>A cool new feature I'm proud of:</p>
            
            <ul>
                <li>Chat-based interface for managing tasks</li>
                <li>Commands like:</li>
                <ul>
                    <li><code>add Finish homework 6pm</code></li>
                    <li><code>add Buy groceries, Call mom, Clean desk</code></li>
                    <li><code>clear history, list tasks, help</code></li>
                </ul>
                <li>Quick-action buttons for fast interactions</li>
            </ul>
            
            <p>This brings a conversational and intuitive experience to managing daily tasks!</p>
            
            <h5>📝 4. Notes Section</h5>
            
            <p>Now you can create and manage personal notes right inside Taskumi.</p>
            
            <ul>
                <li>Add/edit/delete notes</li>
                <li>Great for jotting down ideas, reminders, or planning content</li>
            </ul>
            
            <h5>🕓 5. Task History</h5>
            
            <p>See all your completed tasks in one place, with the ability to clear the history anytime. It's satisfying and helps track your progress over time!</p>
            
            <h4>🌐 Try Taskumi</h4>
            
            <p>You can check out the app live here:<br>
            👉 <a href="https://taskumi.vercel.app" target="_blank" rel="noopener">https://taskumi.vercel.app</a></p>
            
            <p>Feel free to use it, give feedback, or suggest new ideas!</p>
            
            <h4>💬 Final Thoughts</h4>
            
            <p>Building Taskumi has been a great learning journey — from HTML, CSS, and JavaScript to UX design and productivity systems. With each update, I aim to make it not just a tool, but a daily companion for people who love staying productive.</p>
        `
    },
    {
        id: 'fight-club-lessons',
        title: 'The Lesson Fight Club Taught Me About Pain, Failure, and Growth',
        date: '2025-03-22',
        category: 'Philosophy',
        tags: ['philosophy', 'growth', 'life', 'arpanmukherjeeblog'],
        image: 'fightclub.jpg',
        excerpt: 'One day, I told my brother, "I can\'t do the JEE exam. I\'m going to focus on my skills instead." I thought I was making a rational decision...',
        content: `
            <p>One day, I told my brother,</p>
            
            <p>"I can't do the JEE exam. I'm going to focus on my skills instead."</p>
            
            <p>I thought I was making a rational decision, taking control of my life. But deep down, I knew the truth—I was running. Running from the pressure, from the fear of failure, from the pain of discipline.</p>
            
            <p>My brother didn't argue. He just played a scene from Fight Club.</p>
            
            <p>On the screen, Tyler Durden grabbed the Narrator's hand and poured lye onto it. His skin burned, his body twisted in agony. He tried to escape, to dissociate, but Tyler wouldn't let him.</p>
            
            <p><strong>"This is the greatest moment of your life, and you're missing it."</strong></p>
            
            <p>The Narrator fought back, trying to suppress the pain, but Tyler forced him to stay with it.</p>
            
            <p><strong>"You have to accept, not fear, that someday you're gonna die."</strong></p>
            
            <p>I watched in silence. My brother looked at me and said,</p>
            
            <p><strong>"Right now, you think you're choosing skills over exams, but the truth is, you're running from the pain of preparation."</strong></p>
            
            <p>And he was right.</p>
            
            <h4>The Truth About Pain</h4>
            
            <p>I didn't clear JEE. I failed. But for the first time, I understood something deeper—pain is not the enemy. Running from it is.</p>
            
            <p>Pain is a teacher. It shows you where you are weak, where you need to grow. It strips away the illusions, the excuses, the false comforts.</p>
            
            <p>I had spent so much time avoiding struggle that I had never truly tested my limits.</p>
            
            <h4>The Comfort of Avoidance</h4>
            
            <p>Every time something got difficult, I found an excuse to quit. Every time I faced the possibility of failure, I convinced myself there was a "smarter" way around it.</p>
            
            <p>JEE was hard? I'd focus on "practical skills."</p>
            <p>Coding challenges were frustrating? I'd switch to "easier" projects.</p>
            <p>Relationships required vulnerability? I'd stay safely distant.</p>
            
            <p>I had built an entire identity around being "strategic" and "efficient," but the truth was simpler: I was afraid of pain.</p>
            
            <h4>What Tyler Really Meant</h4>
            
            <p>Tyler's lesson wasn't about physical pain—it was about presence. About staying with discomfort instead of running from it.</p>
            
            <p>The greatest moments of growth happen when we're uncomfortable. When we're failing. When we're confused and don't know what to do next.</p>
            
            <p>But most of us miss these moments because we're too busy trying to escape them.</p>
            
            <h4>Embracing the Fire</h4>
            
            <p>But now, I know what I want. And more importantly, I know how to get there. Not by escaping discomfort, but by embracing it. Not by avoiding pain, but by using it.</p>
            
            <p>Pain is no longer something I fear. It's my ally. Because only those who endure the fire come out stronger.</p>
            
            <div class="video-link">
                <p><strong>Scene from Fight Club:</strong> <a href="https://youtu.be/zvtUrjfnSnA?si=P3042ZEE6vdOTspk" target="_blank" rel="noopener">Watch the scene</a></p>
            </div>
        `
    }
];

// Function to get all blog posts
function getAllPosts() {
    return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function to get a specific post by ID
function getPostById(id) {
    return blogPosts.find(post => post.id === id);
}

// Function to get posts by category
function getPostsByCategory(category) {
    return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Function to get posts by tag
function getPostsByTag(tag) {
    return blogPosts.filter(post => post.tags.includes(tag));
}