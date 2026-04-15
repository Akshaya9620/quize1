// DOM Elements
const navButtons = document.querySelectorAll('.tab-button');
const pages = {
  home: document.getElementById('homePage'),
  story: document.getElementById('storyPage'),
  storyDetails: document.getElementById('storyDetailsPage'),
  quiz: document.getElementById('quizPage'),
  result: document.getElementById('resultPage'),
};

const startLearningBtn = document.getElementById('startLearningBtn');
const storyList = document.getElementById('storyList');
const storyDetailsTitle = document.getElementById('detailsTitle');
const storyIcon = document.getElementById('storyIcon');
const storyContent = document.getElementById('storyContent');
const startQuizBtn = document.getElementById('startQuizBtn');
const quizTitle = document.getElementById('quizTitle');
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const feedbackMsg = document.getElementById('feedbackMsg');
const nextQuizBtn = document.getElementById('nextQuizBtn');
const questionNum = document.getElementById('questionNum');
const totalQuestions = document.getElementById('totalQuestions');
const progressFill = document.getElementById('progressFill');
const scoreText = document.getElementById('scoreText');
const resultMsg = document.getElementById('resultMsg');
const resultBadge = document.getElementById('resultBadge');
const retryBtn = document.getElementById('retryBtn');
const goHomeBtn = document.getElementById('goHomeBtn');

// Story Database
const storiesDB = [
  {
    id: 'david',
    title: 'David and Goliath',
    icon: '🐑',
    preview: 'David was a young shepherd boy who defeated a giant named Goliath using just a sling and a stone.',
    content: `<p>David was a young shepherd boy who took care of sheep. One day, a giant warrior named Goliath challenged the army of Israel. Everyone was afraid because Goliath was very strong and tall.</p>
              <p>But David was brave. He believed in himself and trusted God. Instead of using heavy weapons, David took a sling and five small stones.</p>
              <p>When Goliath laughed at him, David did not get scared. He used his sling and threw a stone that hit Goliath on the head. The giant fell down, and David won the battle.</p>
              <p><strong>Moral:</strong> Courage and faith can defeat even the biggest problems.</p>`,
    questions: [
      { question: 'Who was David?', options: ['A King', 'A shepherd boy', 'A soldier'], correct: 1 },
      { question: 'Who was Goliath?', options: ['A farmer', 'A giant warrior', 'A king'], correct: 1 },
      { question: 'What did David use to fight?', options: ['A sword', 'A sling and stone', 'A bow'], correct: 1 },
      { question: 'What quality did David show?', options: ['Fear', 'Courage', 'Anger'], correct: 1 },
      { question: 'What is the moral?', options: ['Size matters most', 'Courage wins', 'Strength only'], correct: 1 },
    ]
  },
  {
    id: 'noah',
    title: 'Noah\'s Ark',
    icon: '🚢',
    preview: 'Noah built a big ark to save animals from a great flood and followed instructions with faith.',
    content: `<p>Noah was a good and kind man. One day, God told Noah that a big flood was coming to destroy the earth. He asked Noah to build a large ark (boat).</p>
              <p>Noah followed the instructions carefully. He built the ark and brought animals in pairs—two lions, two elephants, two birds, and many more.</p>
              <p>It rained for many days and nights. The whole earth was covered with water. But Noah, his family, and the animals were safe inside the ark.</p>
              <p>After the rain stopped, the water went away, and life started fresh again.</p>
              <p><strong>Moral:</strong> Obeying and trusting brings safety and new beginnings.</p>`,
    questions: [
      { question: 'Who did God ask to build the ark?', options: ['Moses', 'Noah', 'David'], correct: 1 },
      { question: 'Why did Noah build the ark?', options: ['To travel', 'To save animals from flood', 'To play'], correct: 1 },
      { question: 'How many of each animal did Noah bring?', options: ['One', 'Two', 'Three'], correct: 1 },
      { question: 'What happened after the rain stopped?', options: ['More rain came', 'Water went away', 'Snow fell'], correct: 1 },
      { question: 'What is the moral?', options: ['Building is hard', 'Obeying brings safety', 'Animals are smart'], correct: 1 },
    ]
  },
  {
    id: 'tenali',
    title: 'Tenali Ramakrishna',
    icon: '👑',
    preview: 'Tenali was a clever poet who used intelligence and humor to solve problems in the king\'s court.',
    content: `<p>Tenali Ramakrishna was a very clever man in King Krishnadevaraya's court. He was known for his intelligence and humor.</p>
              <p>One day, the king asked a difficult question that no one could answer. Tenali used his smart thinking and gave a funny but correct answer.</p>
              <p>Everyone laughed and learned something important. Tenali always solved problems using his wit instead of anger.</p>
              <p>His clever stories became famous and people loved him for making them think and smile.</p>
              <p><strong>Moral:</strong> Intelligence and humor can solve problems easily.</p>`,
    questions: [
      { question: 'What was Tenali known for?', options: ['Strength', 'Cleverness and humor', 'Wealth'], correct: 1 },
      { question: 'Where did Tenali work?', options: ['Temple', 'King\'s court', 'School'], correct: 1 },
      { question: 'How did Tenali solve problems?', options: ['With force', 'With intelligence', 'With magic'], correct: 1 },
      { question: 'What did people love about Tenali?', options: ['His strength', 'His humor and wisdom', 'His money'], correct: 1 },
      { question: 'What is the moral?', options: ['Anger solves all', 'Humor helps', 'Intelligence and wit win'], correct: 2 },
    ]
  },
  {
    id: 'honest',
    title: 'The Honest King',
    icon: '🤴',
    preview: 'A king wanted to find an honest person and rewarded the child who told the truth with an empty pot.',
    content: `<p>A king wanted to find an honest child. He gave seeds to all children and told them to grow plants.</p>
              <p>After a few days, all children came back with beautiful plants. But one boy came with an empty pot.</p>
              <p>He said, "I tried my best, but nothing grew from the seeds you gave me."</p>
              <p>The king smiled and said, "The seeds I gave were fake. Only you are honest. All others either lied or planted different seeds."</p>
              <p>The boy was rewarded with respect and gifts for his honesty.</p>
              <p><strong>Moral:</strong> Honesty is always rewarded.</p>`,
    questions: [
      { question: 'What did the king give to children?', options: ['Money', 'Seeds', 'Toys'], correct: 1 },
      { question: 'What happened with the fake seeds?', options: ['They grew plants', 'Nothing grew', 'They were gold'], correct: 1 },
      { question: 'How many children were honest?', options: ['All', 'Most', 'Only one'], correct: 2 },
      { question: 'Why did the king reward the boy?', options: ['He was sad', 'For his honesty', 'For being smart'], correct: 1 },
      { question: 'What is the moral?', options: ['Lying helps', 'Honesty matters', 'Seeds are fake'], correct: 1 },
    ]
  },
];

// State
let currentStory = null;
let currentQuestionIndex = 0;
let currentScore = 0;
let selectedAnswerIndex = null;
let userAnswers = [];

// Page Management
function showPage(pageName) {
  Object.values(pages).forEach(page => page.classList.add('hidden'));
  if (pages[pageName]) pages[pageName].classList.remove('hidden');
  updateActiveTab(pageName);
}

function updateActiveTab(pageName) {
  navButtons.forEach(btn => {
    const isActive = btn.dataset.page === pageName;
    btn.classList.toggle('active', isActive);
  });
}

// Story Page
function renderStoryCards() {
  storyList.innerHTML = '';
  storiesDB.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `
      <div class="story-card-icon">${story.icon}</div>
      <h3>${story.title}</h3>
      <p>${story.preview}</p>
      <button class="read-more-btn">Read More</button>
    `;
    card.querySelector('.read-more-btn').addEventListener('click', () => showStoryDetails(story.id));
    storyList.appendChild(card);
  });
}

// Story Details Page
function showStoryDetails(storyId) {
  currentStory = storiesDB.find(s => s.id === storyId);
  if (!currentStory) return;
  
  localStorage.setItem('selectedStory', storyId);
  storyIcon.textContent = currentStory.icon;
  storyDetailsTitle.textContent = currentStory.title;
  storyContent.innerHTML = currentStory.content;
  
  showPage('storyDetails');
}

// Quiz Management
function startQuiz() {
  if (!currentStory) return;
  
  currentQuestionIndex = 0;
  currentScore = 0;
  selectedAnswerIndex = null;
  userAnswers = [];
  
  quizTitle.textContent = `${currentStory.title} Quiz`;
  totalQuestions.textContent = currentStory.questions.length;
  
  showPage('quiz');
  renderQuestion();
}

function renderQuestion() {
  const question = currentStory.questions[currentQuestionIndex];
  questionNum.textContent = currentQuestionIndex + 1;
  questionText.textContent = question.question;
  optionsGrid.innerHTML = '';
  feedbackMsg.textContent = 'Select an answer';
  nextQuizBtn.disabled = true;
  selectedAnswerIndex = null;
  
  const progress = ((currentQuestionIndex) / currentStory.questions.length) * 100;
  progressFill.style.width = progress + '%';
  
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-button';
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(index));
    optionsGrid.appendChild(btn);
  });
}

function selectOption(index) {
  if (selectedAnswerIndex !== null) return;
  
  selectedAnswerIndex = index;
  const question = currentStory.questions[currentQuestionIndex];
  const buttons = optionsGrid.querySelectorAll('button');
  const isCorrect = index === question.correct;
  
  buttons.forEach((btn, i) => {
    if (i === question.correct) btn.classList.add('correct');
    if (i === index && !isCorrect) btn.classList.add('incorrect');
  });
  
  if (isCorrect) currentScore += 1;
  userAnswers.push(isCorrect);
  
  feedbackMsg.textContent = isCorrect ? 'Excellent! ✅' : 'Try again—learn more! 💪';
  nextQuizBtn.disabled = false;
  nextQuizBtn.textContent = currentQuestionIndex === currentStory.questions.length - 1 ? 'Submit' : 'Next';
}

function goToNextQuestion() {
  if (currentQuestionIndex < currentStory.questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    showResultPage();
  }
}

// Result Page
function showResultPage() {
  const total = currentStory.questions.length;
  scoreText.textContent = `You scored ${currentScore}/${total} ⭐`;
  
  if (currentScore === total) {
    resultBadge.textContent = '🌟';
    resultMsg.textContent = 'Excellent! You know this story very well!';
  } else if (currentScore >= total - 1) {
    resultBadge.textContent = '👍';
    resultMsg.textContent = 'Good Job! You are almost perfect!';
  } else {
    resultBadge.textContent = '💪';
    resultMsg.textContent = 'Try Again! Read the story and improve your score.';
  }
  
  progressFill.style.width = '100%';
  localStorage.setItem('quizAppLastScore', JSON.stringify({
    story: currentStory.title,
    score: currentScore,
    total: total,
    date: new Date().toLocaleDateString(),
  }));
  
  showPage('result');
}

// Event Listeners
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;
    if (page === 'logout') {
      showPage('home');
    } else if (page === 'story') {
      showPage('story');
      renderStoryCards();
    } else {
      showPage(page);
    }
  });
});

startLearningBtn.addEventListener('click', () => {
  showPage('story');
  renderStoryCards();
});

startQuizBtn.addEventListener('click', startQuiz);
nextQuizBtn.addEventListener('click', goToNextQuestion);
retryBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  currentScore = 0;
  selectedAnswerIndex = null;
  renderQuestion();
  showPage('quiz');
});
goHomeBtn.addEventListener('click', () => showPage('home'));

// Initialize
renderStoryCards();
showPage('home');
