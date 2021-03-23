import { ThemeProvider } from '@material-ui/core/styles';
import Register from './containers/register';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}

export default App;
