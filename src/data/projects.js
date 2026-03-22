import marketMindPreview from '../assets/marketmind-preview.svg'
import flashSalePreview from '../assets/flash-sale-preview.svg'
import abBankPreview from '../assets/ab-bank-preview.svg'

export const projects = [
  {
    title: 'Financial Market Research Agent',
    subtitle: 'RAG | LangGraph | Gemini 2.5 Flash',
    description:
      'AI-powered financial research assistant with live market data, hybrid search, reranking, and persistent financial memory.',
    tags: ['RAG', 'LangGraph', 'Gemini 2.5', 'Qdrant', 'Next.js'],
    repoUrl: 'https://github.com/praveenreddy-kalavapalli/Financial-Market-Research-Agent',
    imageSrc: marketMindPreview,
    featured: true,
    detailType: 'marketmind',
    demoLines: [
      { delay: 0, text: '> query: "What are NVIDIA fundamentals?"', tone: 'cyan' },
      { delay: 0.4, text: '-> Router: FUNDAMENTALS route detected', tone: 'green' },
      { delay: 0.8, text: '-> Gatherer: Fetching yFinance data...', tone: 'gold' },
      { delay: 1.2, text: '-> HyDE: Generating hypothetical document...', tone: 'gold' },
      { delay: 1.6, text: '-> Hybrid Search: BM25 + Vector (ChromaDB)...', tone: 'gold' },
      { delay: 2.0, text: '-> Reranker: ms-marco-MiniLM scoring...', tone: 'gold' },
      { delay: 2.4, text: '-> Analyzer: Gemini 2.5 Flash synthesizing...', tone: 'violet' },
      { delay: 2.8, text: '-> Confidence: HIGH (4 sources, live data)', tone: 'green' },
      { delay: 3.2, text: '-> Memory saved - Response ready', tone: 'green' },
    ],
    about:
      'MarketMind is a production-grade AI research agent that combines Retrieval-Augmented Generation with a multi-step LangGraph pipeline to deliver deep financial analysis. It classifies queries into 10 smart routes, fetches live market data via yFinance, searches a vector knowledge base using hybrid BM25 plus semantic search, reranks results with a cross-encoder, and synthesizes everything with Gemini 2.5 Flash while maintaining persistent financial memory across sessions.',
    features: [
      { icon: 'RT', title: '10 Smart Query Routes', desc: 'Auto intent classification for stock prices, fundamentals, technicals, comparisons, news, portfolio, and more.' },
      { icon: 'HS', title: 'Hybrid Search', desc: 'BM25 keyword and ChromaDB vector retrieval combined with Reciprocal Rank Fusion for stronger results.' },
      { icon: 'HD', title: 'HyDE Retrieval', desc: 'Generates hypothetical ideal answers first, then searches to improve semantic retrieval accuracy.' },
      { icon: 'RR', title: 'Cross-Encoder Reranking', desc: 'ms-marco-MiniLM-L-6-v2 reranks retrieved passages for better precision before synthesis.' },
      { icon: 'FM', title: 'Financial Memory', desc: 'Persistent memory with Qdrant to retain user preferences, past research, and discussion context.' },
      { icon: 'LN', title: 'Live News Ingestion', desc: 'Streams financial news from FT, Economist, MoneyControl, and Economic Times RSS feeds.' },
      { icon: 'LG', title: 'LangGraph Pipeline', desc: 'Six connected steps: Router, Clarifier, Gatherer, Analyzer, Memo Writer, and Memory Saver.' },
      { icon: 'CS', title: 'Confidence Scoring', desc: 'Transparent HIGH, MEDIUM, and LOW confidence levels with source counts and reasoning.' },
    ],
    techStack: [
      { category: 'AI/ML', items: ['Gemini 2.5 Flash', 'LangGraph', 'Sentence Transformers', 'Cross-Encoder'] },
      { category: 'Search', items: ['BM25', 'ChromaDB', 'Qdrant Cloud', 'HyDE'] },
      { category: 'Data', items: ['yFinance', 'DuckDuckGo', 'feedparser', 'RSS Feeds'] },
      { category: 'Backend', items: ['Python', 'Flask', '14 REST APIs', 'LangChain'] },
      { category: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4'] },
    ],
    pipeline: [
      { node: 'Router', desc: 'Classifies query into 10 routes, detects follow-ups, and resolves symbols.' },
      { node: 'Clarifier', desc: 'Checks whether more context is needed and can autofill from memory.' },
      { node: 'Gatherer', desc: 'Fetches market tools, hybrid retrieval, and web fallback in parallel.' },
      { node: 'Analyzer', desc: 'Gemini 2.5 Flash synthesizes live data and retrieved context with route-specific prompts.' },
      { node: 'Memo Writer', desc: 'Formats the response with metadata, confidence, sources, and tracked symbols.' },
      { node: 'Memory Saver', desc: 'Stores research history and learned preferences for future conversations.' },
    ],
    supportedMarkets: [
      { symbol: 'IN', label: 'Indian Stocks (NSE)', examples: 'TCS, Infosys, Reliance' },
      { symbol: 'US', label: 'US Stocks', examples: 'NVIDIA, Apple, Tesla' },
      { symbol: 'CR', label: 'Crypto', examples: 'BTC, ETH, SOL' },
      { symbol: 'CM', label: 'Commodities', examples: 'Gold, Silver, Oil' },
      { symbol: 'IX', label: 'Indices', examples: 'NIFTY 50, SENSEX' },
    ],
  },
  {
    title: 'Flash Sale System',
    subtitle: 'Go | Redis | PostgreSQL | Next.js',
    description:
      'High-concurrency demo showing race conditions, overselling, and how PostgreSQL row locks and Redis Lua scripts prevent them.',
    tags: ['Go', 'Redis', 'PostgreSQL', 'Next.js', 'Docker'],
    repoUrl: 'https://github.com/praveenreddy-kalavapalli/Flash_Sale_System.git',
    imageSrc: flashSalePreview,
    featured: true,
    detailType: 'flashsale',
    about:
      'Flash Sale System is a real-time high-concurrency demonstration that shows what happens when 2000 users try to buy 100 items simultaneously. It visually proves race conditions cause overselling and demonstrates how PostgreSQL row-level locks and Redis atomic Lua scripts solve the problem, with a live dashboard showing stock, orders, and latency.',
    features: [
      { icon: 'CU', title: '2000 Concurrent Users', desc: 'Simulates 2000 users buying simultaneously to trigger race conditions in real time.' },
      { icon: 'LS', title: '3 Locking Strategies', desc: 'Compares No Lock, DB Lock, and Redis Lock side by side with live metrics.' },
      { icon: 'LD', title: 'Live Dashboard', desc: 'Next.js dashboard shows stock count, orders, oversell status, and latency in real time.' },
      { icon: 'DK', title: 'Docker Setup', desc: 'One command spins up PostgreSQL 15 and Redis 7 in a reproducible local environment.' },
      { icon: 'RC', title: 'Race Condition Demo', desc: 'Visually proves how race conditions cause overselling and why locks fix it.' },
      { icon: 'PF', title: 'Fast Throughput', desc: 'Redis locking reaches around 2500 req/s with lower latency than database row locks.' },
    ],
    techStack: [
      { category: 'Backend', items: ['Go 1.21', 'Gin Framework', 'PostgreSQL 15', 'Redis 7'] },
      { category: 'Frontend', items: ['Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Infra', items: ['Docker', 'Docker Compose', 'REST API'] },
    ],
    strategies: [
      {
        name: 'No Lock',
        status: 'Overselling',
        tone: 'danger',
        desc: 'Race condition where multiple goroutines read stock before writing, causing overselling.',
        code: `stock := db.Query("SELECT quantity FROM products WHERE id=1")
if stock > 0 {
  db.Exec("UPDATE products SET quantity = quantity - 1")
}`,
      },
      {
        name: 'DB Lock',
        status: 'Safe',
        tone: 'success',
        desc: 'PostgreSQL FOR UPDATE locks the row until commit. Safe, but slightly slower under heavy contention.',
        code: `tx.Begin()
tx.Query("SELECT * FROM products WHERE id=1 FOR UPDATE")
tx.Exec("UPDATE products SET quantity = quantity - 1")
tx.Commit()`,
      },
      {
        name: 'Redis Lock',
        status: 'Safe + Fast',
        tone: 'info',
        desc: 'Redis Lua scripts run atomically and avoid race conditions with the best throughput.',
        code: `local stock = redis.call("GET", "product:1:stock")
if tonumber(stock) > 0 then
  return redis.call("DECR", "product:1:stock")
end
return -1`,
      },
    ],
    performance: [
      { label: 'No Lock', rps: '~2000 req/s', latency: '~30ms', state: 'oversells', bar: 80, tone: 'danger' },
      { label: 'DB Lock', rps: '~1900 req/s', latency: '~35ms', state: 'safe', bar: 76, tone: 'success' },
      { label: 'Redis Lock', rps: '~2500 req/s', latency: '~25ms', state: 'safe + fast', bar: 100, tone: 'info' },
    ],
  },
  {
    title: 'AB Bank',
    subtitle: 'React | Tailwind CSS | Recharts | Context API',
    description:
      'Digital banking dashboard with two-layer security, multi-bank account switching, transaction filtering, and card management.',
    tags: ['React', 'Tailwind CSS', 'Recharts', 'Context API', 'Vite'],
    repoUrl: 'https://github.com/praveenreddy-kalavapalli/Banking',
    imageSrc: abBankPreview,
    featured: true,
    detailType: 'banking',
    about:
      'AB Bank is a complete digital banking frontend built with React and Tailwind CSS. It includes a two-layer security system: standard email and password login with CAPTCHA, followed by a PIN-protected unlock screen tied to a selected bank account. Inside the app, users get a full dashboard with live charts, multi-bank account switching, quick actions for sending and requesting money, searchable transaction history, card management, and a detailed account profile page.',
    features: [
      { icon: 'AU', title: 'Secure Login + CAPTCHA', desc: 'Email and password authentication with auto-generated CAPTCHA verification on login and registration.' },
      { icon: 'MB', title: 'Multi-Bank Account Linking', desc: 'Link multiple bank accounts and switch between them with a single click on the dashboard.' },
      { icon: 'PN', title: 'PIN Unlock Screen', desc: 'Second security layer using bank selection, account number, and a 4-digit PIN.' },
      { icon: 'CC', title: 'Credit Card Management', desc: 'Visual card display with bank-specific themes, online toggle, and primary-secondary controls.' },
      { icon: 'LD', title: 'Live Dashboard', desc: 'Income and expense charts, balance overview, account details, and recent activity feed.' },
      { icon: 'QA', title: 'Quick Actions', desc: 'Send Money, Request Money, Add Beneficiary, and View Statement with validation handling.' },
      { icon: 'TH', title: 'Transaction History', desc: 'Search by description and filter by credit, debit, and date ranges.' },
      { icon: 'PF', title: 'Profile + Security', desc: 'Linked accounts list, masked account numbers, primary account badge, and password change section.' },
      { icon: 'TM', title: 'Dark / Light Mode', desc: 'Theme toggle across the banking dashboard with persistent state.' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React 18', 'Vite', 'React Router v6', 'Tailwind CSS'] },
      { category: 'Charts', items: ['Recharts', 'LineChart', 'ResponsiveContainer'] },
      { category: 'Icons', items: ['Lucide React'] },
      { category: 'State', items: ['Context API', 'localStorage', 'sessionStorage'] },
      { category: 'Auth', items: ['Custom Auth', 'CAPTCHA', 'PIN Lock', 'Multi-account'] },
    ],
    pages: [
      { name: 'Login', path: '/login', desc: 'Email + password + CAPTCHA', tone: 'info' },
      { name: 'Register', path: '/register', desc: 'Name, email, phone, password, CAPTCHA', tone: 'success' },
      { name: 'Unlock', path: '/unlock', desc: 'Bank + account no + 4-digit PIN', tone: 'gold' },
      { name: 'Dashboard', path: '/dashboard', desc: 'Charts, balance, quick actions', tone: 'violet' },
      { name: 'Cards', path: '/cards', desc: 'Primary + secondary card management', tone: 'info' },
      { name: 'Transactions', path: '/transaction', desc: 'Searchable + filterable table', tone: 'success' },
      { name: 'Account', path: '/account', desc: 'Profile + linked accounts + security', tone: 'danger' },
    ],
    validations: [
      'Phone - exactly 10 digits',
      'Password - uppercase + lowercase + special char',
      'PIN - exactly 4 digits, numeric only',
      'Account number - 9 to 18 digits',
      'CAPTCHA - alphanumeric and regenerates on failure',
      'Email - HTML5 native validation',
      'Duplicate account detection',
      'Duplicate email registration check',
    ],
  },
]
