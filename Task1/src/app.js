const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// API proxy for invoice API (to avoid CORS issues in browser)
app.get('/api/invoice', async (req, res) => {
  try {
   const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
   const response = await fetch('https://in3.dev/inv/');
   const data = await response.json();
   res.json(data);
  } catch (err) {
   res.status(500).json({error: 'Failed to fetch invoice'});
  }
});

app.listen(port, () => {
  console.log(`Port Nr.: ${port}`);
});