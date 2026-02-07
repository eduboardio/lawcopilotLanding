// components/home/demo/useDemoAnimation.ts
import { useState, useEffect, useCallback } from "react";

export const useDemoAnimation = () => {
  const [cursorPos, setCursorPos] = useState({ x: 20, y: 50 });
  const [cursorClicking, setCursorClicking] = useState(false);
  const [showPanels, setShowPanels] = useState({ 
    chat: true, 
    artifact: false, 
    detail: false 
  });
  const [typedText, setTypedText] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);
  const [selectedCase, setSelectedCase] = useState(false);

  const demoQuery = "Find case laws on Order VII Rule 11(a) CPC";

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const animateCursor = useCallback(async (target: { x: number; y: number }, duration = 600) => {
    setCursorPos(target);
    await delay(duration);
  }, []);

  const clickAnimation = useCallback(async () => {
    setCursorClicking(true);
    await delay(150);
    setCursorClicking(false);
    await delay(100);
  }, []);

  const resetAnimation = () => {
    setTypedText("");
    setShowResponse(false);
    setShowPanels({ chat: true, artifact: false, detail: false });
    setSelectedCase(false);
    setShowProcessing(false);
    setCursorPos({ x: 20, y: 50 });
  };

  useEffect(() => {
    const runAnimation = async () => {
      resetAnimation();
      await delay(1200);

      // Step 1: Move to input field (more centered in chat area)
      await animateCursor({ x: 42, y: 88 }, 700);
      await delay(200);
      await clickAnimation();
      await delay(300);

      // Step 2: Type query character by character
      for (let i = 0; i <= demoQuery.length; i++) {
        setTypedText(demoQuery.slice(0, i));
        await delay(45);
      }

      // Step 3: Move to send button (right side of input)
      await delay(400);
      await animateCursor({ x: 52, y: 88 }, 500);
      await delay(300);
      await clickAnimation();

      // Step 4: Show processing state
      await delay(400);
      setShowProcessing(true);
      await delay(2000);
      
      // Step 5: Show response
      setShowProcessing(false);
      setShowResponse(true);
      await delay(1200);

      // Step 6: Move cursor up to "View Research Results" button
      await animateCursor({ x: 42, y: 68 }, 700);
      await delay(500);
      await clickAnimation();

      // Step 7: Open artifact panel
      await delay(300);
      setShowPanels({ chat: true, artifact: true, detail: false });
      await delay(1000);

      // Step 8: Move to artifact panel - scroll area
      await animateCursor({ x: 64, y: 45 }, 800);
      await delay(600);

      // Step 9: Move to first case item
      await animateCursor({ x: 64, y: 52 }, 500);
      await delay(400);
      await clickAnimation();

      // Step 10: Expand case
      await delay(300);
      setSelectedCase(true);
      await delay(1000);

      // Step 11: Move to "Get Court Copy" button
      await animateCursor({ x: 64, y: 62 }, 600);
      await delay(500);
      await clickAnimation();

      // Step 12: Open third panel
      await delay(300);
      setShowPanels({ chat: true, artifact: true, detail: true });
      await delay(1500);

      // Step 13: Scroll in detail panel
      await animateCursor({ x: 83, y: 55 }, 800);
      await delay(800);
      await animateCursor({ x: 83, y: 65 }, 700);
      await delay(1500);

      // Loop
      runAnimation();
    };

    runAnimation();
  }, [animateCursor, clickAnimation]);

  return {
    cursorPos,
    cursorClicking,
    showPanels,
    typedText,
    showResponse,
    showProcessing,
    selectedCase,
  };
};