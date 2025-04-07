import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [],
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Write a Script to Generate 30 Seconds Video on Topic : Interesting Thriller Story along with AI Image Prompts in Realistic Format for each scene and give the result in a JSON format with imagePrompt and contentText fields",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A shadowy figure lurking in a dimly lit alleyway, rain falling, neon signs reflecting in wet pavement, cinematic lighting, hyperrealistic, 8k",\n    "contentText": "The night was thick with rain, mirroring the unease in Elias\'s gut. He\'d been followed since leaving the casino, a weight pressing down on him heavier than the damp chill."\n  },\n  {\n    "imagePrompt": "Close-up of a nervous man\'s face, sweat on his brow, eyes darting around, dimly lit room, realistic, detailed, 8k",\n    "contentText": "He glanced over his shoulder, the fear a cold knot in his stomach.  Each footstep echoed in the silence, amplified by his racing heart."\n  },\n  {\n    "imagePrompt": "A mysterious package, tied with twine, sitting on a rain-soaked table in a deserted bar, low-key lighting, film grain, hyperrealistic, 8k",\n    "contentText": "He’d been given a package, a mysterious object that held the key to everything. But who could he trust?"\n  },\n  {\n    "imagePrompt": "A tense standoff between two figures in a darkened warehouse, one holding a gun, the other pleading, dramatic lighting, shadows, realistic, 8k",\n    "contentText": "Cornered in an abandoned warehouse, Elias faced his pursuer, a man whose face was obscured by shadows,  a cold steel glinting in his hand."\n  },\n  {\n    "imagePrompt": "A close-up shot of a hand reaching for a hidden compartment, revealing a flash drive, dramatic lighting, suspenseful, realistic, 8k",\n    "contentText": "He had to find a way out. A flash drive, the only piece of evidence that could save him, lay hidden within the package."\n  },\n  {\n    "imagePrompt": "A car speeding through a city street at night, rain blurring the headlights, cinematic, dynamic, hyperrealistic, 8k",\n    "contentText": "With the flash drive in hand, Elias made his escape, the rain blurring the city lights into streaks of color."\n  },\n  {\n    "imagePrompt": "A shadowy figure watching from a distance, using binoculars, a rooftop overlooking the city at night, cinematic lighting, realistic, 8k",\n    "contentText": "But he wasn\'t alone. Someone was still watching, their gaze piercing the darkness."\n  }\n]\n```\n\n**Notes:**\n\n* **30-Second Video:**  This JSON provides enough scenes for a 30-second video, assuming each scene is given around 3-5 seconds of screen time.  The pacing will depend on the video editing.\n* **AI Image Generation:** These prompts are designed for AI image generators like Midjourney, Dall-E 2, or Stable Diffusion.  The `8k` and "hyperrealistic" keywords aim for high-quality images. Adjust these parameters as needed for your chosen AI.\n* **Realistic Format:**  The prompts use descriptive language to create a visually consistent and realistic style.\n* **Content Text:** This text provides a short narrative for each scene, enough to guide the video editing and voiceover (if any).\n* **Video Editing:**  You will need video editing software to combine the generated images, add transitions, sound effects, and potentially a voiceover to create the final 30-second thriller.\n\n\nThis JSON structure is easily adaptable. You can add more scenes, adjust the prompt details, and tailor the content text to fit your specific vision for the thriller story.  Remember to experiment with different keywords and parameters in the image prompts to achieve the desired aesthetic.\n',
        },
      ],
    },
  ],
});
