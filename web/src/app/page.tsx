"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge/Badge";
import {
  ChevronUp,
  ChevronDown,
  User,
  LogIn,
  Quote,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import LoginForm from "@/components/LoginForm";
import { useToast } from "@/hooks/use-toast";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [quotes, setQuotes] = useState<
    Array<{
      id: string;
      text: string;
      category: string;
      votes?: { up?: number; down?: number };
    }>
  >([]);
  const [filterText, setFilterText] = useState<string>("");
  const { toast } = useToast();

  // Fetch quotes on load
  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch(`${apiUrl}/quotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load quotes. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleVote = (quoteId: string) => {
    const existingQuote = quotes.find((q: any) => q.id === quoteId);
    if (!existingQuote) {
      toast({
        title: "Error",
        description: "Quote not found.",
        variant: "destructive",
      });
      return;
    }

    fetch(`${apiUrl}/quotes/${quoteId}/vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to cast vote");
        }
        fetchQuotes(); // Refresh quotes after voting
        toast({
          title: "Vote Cast",
          description: "Your vote has been successfully recorded.",
          variant: "success",
        });
      })
      .catch((error) => {
        console.error("Error voting for quote:", error);
        toast({
          title: "Error",
          description: "Failed to cast your vote. Please try again later.",
          variant: "destructive",
        });
      });
  };

  if (showLogin) {
    return <LoginForm onBack={() => setShowLogin(false)} />;
  }

  const getQuotes = async () => {
    try {
      const response = await fetch(`${apiUrl}/quotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }
      const data = await response.json();
      return data as Array<{
        id: string;
        text: string;
        author: string;
        category: string;
        votes?: { up?: number; down?: number };
      }>;
    } catch (error) {
      console.error("Error fetching quotes:", error);
      toast({
        title: "Error",
        description: "Failed to load quotes. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Quote className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">VoteQuotes</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Community
              </Button>
              <Button
                onClick={() => setShowLogin(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Vote on the Quotes That
            <span className="text-blue-600"> Shape Democracy</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Discover powerful quotes about voting, democracy, and civic
            engagement. Vote for your favorites and see what resonates with the
            community.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <TrendingUp className="h-5 w-5 mr-2" />
              Explore Quotes
            </Button>
            <Button variant="outline" size="lg">
              <Award className="h-5 w-5 mr-2" />
              Top Rated
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,247</div>
              <div className="text-gray-600">Quotes Voted On</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">8,932</div>
              <div className="text-gray-600">Community Votes</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">456</div>
              <div className="text-gray-600">Active Voters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Quotes
          </h3>
          {/* Filter by text input */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              className="border rounded px-3 py-2 text-gray-700 w-full max-w-md"
              placeholder="Search quotes..."
              value={filterText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFilterText(e.target.value)
              }
            />
          </div>
          <div className="space-y-6">
            {quotes
              .filter((quote: { text?: string }) => {
                const text = filterText.toLowerCase();
                return (quote.text?.toLowerCase() ?? "").includes(text);
              })
              .map((quote, index: number) => (
                <Card
                  key={quote.id}
                  className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-l-4 border-l-blue-500"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <blockquote className="text-lg text-gray-800 mb-4 italic">
                          "{quote.text}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="mt-1">
                            {quote.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 ml-6">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-green-50 hover:border-green-300"
                          onClick={() => handleVote(quote.id)}
                        >
                          <ChevronUp className="h-4 w-4 text-green-600" />
                          <span className="ml-1 font-semibold">
                            {quote._count.votes}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Quote className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">VoteQuotes</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering democracy through the power of words
            </p>
            <p className="text-sm text-gray-500">
              © 2024 VoteQuotes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
