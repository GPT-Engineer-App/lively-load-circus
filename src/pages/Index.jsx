import { Paw } from "lucide-react";

const Index = () => {
  const popularBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Paw className="mr-2" /> All About Dogs
        </h1>
        <img
          src="/placeholder.svg"
          alt="A cute dog"
          className="mx-auto object-cover w-full h-64 rounded-lg shadow-md mb-6"
        />
        <p className="text-lg mb-6">
          Dogs, known as "man's best friend," are beloved companions that have been
          domesticated for thousands of years. They come in a wide variety of breeds,
          each with unique characteristics and temperaments.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Popular Dog Breeds</h2>
        <ul className="list-disc list-inside mb-6">
          {popularBreeds.map((breed) => (
            <li key={breed} className="mb-2">
              {breed}
            </li>
          ))}
        </ul>
        <p className="text-lg">
          Whether you're looking for a loyal companion, a working dog, or a family pet,
          there's a dog breed out there for everyone. Remember, owning a dog is a big
          responsibility that requires time, care, and love!
        </p>
      </div>
    </div>
  );
};

export default Index;
