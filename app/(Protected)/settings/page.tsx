import { auth, signOut} from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      <h1>{JSON.stringify(session)}</h1>
      <form action={async () => {
        "use server";

        await signOut();
      }} >
        <Button type="submit" >
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
