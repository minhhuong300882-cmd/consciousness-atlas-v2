import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, BookOpen, Star, Clock, Zap, Search, Filter } from "lucide-react";
import { BOOKS, BOOK_CATEGORIES } from "@/data/books";
import { getBookLinks } from "@/lib/atlasLinks";
import { CrossLinkSection } from "@/components/CrossLinkSection";

export default function BookAtlas() {
  const [, navigate] = useLocation();
  const [selectedBook, setSelectedBook] = useState<string>("being-you");
  const [viewMode, setViewMode] = useState<"grid" | "detail" | "categories">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<number | null>(null);
  const [showCrossLinks, setShowCrossLinks] = useState(false);

  const book = BOOKS[selectedBook];

  // Filter books based on search and category
  const filteredBooks = useMemo(() => {
    let results = Object.values(BOOKS);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
          b.author.toLowerCase().includes(query) ||
          b.keyConcepts.some((c) => c.toLowerCase().includes(query))
      );
    }

    if (selectedCategory) {
      const categoryBooks = BOOK_CATEGORIES[selectedCategory as keyof typeof BOOK_CATEGORIES] || [];
      results = results.filter((b) => categoryBooks.includes(b.id));
    }

    if (difficultyFilter) {
      results = results.filter((b) => b.difficulty === difficultyFilter);
    }

    return results;
  }, [searchQuery, selectedCategory, difficultyFilter]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            ← Dashboard
          </Button>
          <h1 className="text-4xl font-bold mb-2">Book Atlas</h1>
          <p className="text-muted-foreground">Curated reading list for consciousness studies</p>
        </div>
      </header>

      {/* View Mode Selector */}
      <div className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              onClick={() => setViewMode("grid")}
              className="gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Browse Books
            </Button>
            <Button
              variant={viewMode === "detail" ? "default" : "outline"}
              onClick={() => setViewMode("detail")}
              className="gap-2"
            >
              <Zap className="w-4 h-4" />
              Book Details
            </Button>
            <Button
              variant={viewMode === "categories" ? "default" : "outline"}
              onClick={() => setViewMode("categories")}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              Categories
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {viewMode === "grid" && (
          <div className="space-y-8">
            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search books by title, author, or concept..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-2"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  size="sm"
                >
                  All Categories
                </Button>
                {Object.keys(BOOK_CATEGORIES).map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat)}
                    size="sm"
                    className="capitalize"
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={difficultyFilter === null ? "default" : "outline"}
                  onClick={() => setDifficultyFilter(null)}
                  size="sm"
                >
                  All Levels
                </Button>
                {[1, 2, 3, 4].map((level) => (
                  <Button
                    key={level}
                    variant={difficultyFilter === level ? "default" : "outline"}
                    onClick={() => setDifficultyFilter(level)}
                    size="sm"
                  >
                    Level {level}
                  </Button>
                ))}
              </div>
            </div>

            {/* Books Grid */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""} found
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBooks.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setSelectedBook(b.id);
                      setViewMode("detail");
                    }}
                    className={`group relative overflow-hidden rounded-lg border-2 transition-all p-6 text-left hover:shadow-lg ${
                      selectedBook === b.id
                        ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                        : "border-border hover:border-cyan-500/50"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {b.title}
                        </h3>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Star className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                          <span className="text-sm font-semibold">{b.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{b.author}</p>
                      <p className="text-xs text-foreground/70 mb-4 line-clamp-2">{b.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                            Level {b.difficulty}
                          </span>
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {b.pages}p
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {viewMode === "detail" && book && (
          <div className="space-y-8">
            {/* Book Header */}
            <div className={`rounded-lg border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
                  <p className="text-xl text-muted-foreground mb-4">{book.author} ({book.year})</p>
                  <p className="text-foreground/80 leading-relaxed mb-6">{book.summary}</p>
                  <div className="flex gap-4 flex-wrap">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Difficulty</p>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-4 rounded-full ${
                              i < book.difficulty ? "bg-cyan-400" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Rating</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                        <span className="font-bold">{book.rating}/5</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Length</p>
                      <p className="font-bold">{book.pages} pages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {book.keyInsights.map((insight, idx) => (
                  <Card key={idx} className="p-4 border-border/50 hover:border-cyan-500/50 transition-colors">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                      <p className="text-foreground/80">{insight}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Key Concepts */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Concepts</h2>
              <div className="flex flex-wrap gap-2">
                {book.keyConcepts.map((concept) => (
                  <span key={concept} className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold">
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Theories */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Related Theories</h2>
              <div className="flex flex-wrap gap-2">
                {book.relatedTheories.map((theory) => (
                  <span key={theory} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-semibold">
                    {theory}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Authors */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Related Authors</h2>
              <div className="flex flex-wrap gap-2">
                {book.relatedAuthors.map((author) => (
                  <span key={author} className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm font-semibold">
                    {author}
                  </span>
                ))}
              </div>
            </div>

            {/* Prerequisites and Next Books */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {book.prerequisites.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
                  <div className="space-y-2">
                    {book.prerequisites.map((prereqId) => {
                      const prereq = BOOKS[prereqId];
                      return (
                        <button
                          key={prereqId}
                          onClick={() => setSelectedBook(prereqId)}
                          className="w-full p-3 rounded-lg border border-border hover:border-cyan-500/50 hover:bg-card/50 transition-colors text-left"
                        >
                          <p className="font-semibold">{prereq.title}</p>
                          <p className="text-sm text-muted-foreground">{prereq.author}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {book.recommendedNext.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Recommended Next</h3>
                  <div className="space-y-2">
                    {book.recommendedNext.map((nextId) => {
                      const next = BOOKS[nextId];
                      return (
                        <button
                          key={nextId}
                          onClick={() => setSelectedBook(nextId)}
                          className="w-full p-3 rounded-lg border border-border hover:border-cyan-500/50 hover:bg-card/50 transition-colors text-left"
                        >
                          <p className="font-semibold">{next.title}</p>
                          <p className="text-sm text-muted-foreground">{next.author}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setViewMode("grid")}
              >
                ← Back to Browse
              </Button>
              <Button className="gap-2">
                Add to Reading List
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {viewMode === "categories" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Browse by Category</h2>
              <p className="text-muted-foreground mb-8">
                Explore consciousness books organized by topic and approach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(BOOK_CATEGORIES).map(([category, bookIds]) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setViewMode("grid");
                  }}
                  className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-cyan-500/50 transition-all p-6 text-left hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 capitalize group-hover:text-cyan-400 transition-colors">
                      {category}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {bookIds.length} book{bookIds.length !== 1 ? "s" : ""}
                    </p>
                    <div className="space-y-1 mb-4">
                      {bookIds.slice(0, 3).map((bookId) => (
                        <p key={bookId} className="text-xs text-foreground/70">
                          • {BOOKS[bookId].title}
                        </p>
                      ))}
                      {bookIds.length > 3 && (
                        <p className="text-xs text-muted-foreground">
                          +{bookIds.length - 3} more
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-semibold">Explore</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cross-Links Section */}
        {viewMode === "detail" && book && (
          <div className="mt-12 space-y-8">
            <div className="border-t border-border pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Connected Knowledge</h2>
                <Button
                  variant="outline"
                  onClick={() => setShowCrossLinks(!showCrossLinks)}
                >
                  {showCrossLinks ? "Hide" : "Show"} Connections
                </Button>
              </div>
              {showCrossLinks && <CrossLinkSection groups={getBookLinks(selectedBook)} />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
