import { Count } from "./components/count";
import { Form } from "./components/form";
import { Headers } from "./components/headers";
import { List } from "./components/list";
import { RegistrationForm } from "./components/registration-form";
import { Title } from "./components/title";
import { User } from "./components/user";
import { ThemeProvider } from "./providers/theme-provider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Headers />
      </ThemeProvider>
      <Title />
      <List />
      <Count />
      <User />
      <Form />
      <RegistrationForm />
    </>
  );
};

export default App;
