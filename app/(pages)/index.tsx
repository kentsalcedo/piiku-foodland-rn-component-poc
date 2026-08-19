import { DesignSystemProvider } from "../../src/providers/DesignSystemProvider";
import { DesignSystemShowcase } from "../../src/screens/DesignSystemShowcase";

export default function Index() {
  return (
    <DesignSystemProvider brand="foodland">
      <DesignSystemShowcase />
    </DesignSystemProvider>
  );
}
