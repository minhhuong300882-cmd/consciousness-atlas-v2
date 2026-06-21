/**
 * Atlas Integration Layer
 * Provides unified cross-linking utilities for connecting theories, concepts, authors, debates, and books
 */

import { THEORIES } from "@/data/theoryComparison";
import { CONCEPTS } from "@/data/concepts";
import { BOOKS } from "@/data/books";

// Type definitions
export interface AtlasLink {
  id: string;
  type: string;
  title: string;
  description?: string;
  color?: string;
  path: string;
}

export interface CrossLinkGroup {
  title: string;
  type: string;
  items: AtlasLink[];
}

// Theory-related links
export function getTheoryLinks(theoryId: string): CrossLinkGroup[] {
  const theory = THEORIES[theoryId];
  if (!theory) return [];

  const groups: CrossLinkGroup[] = [];

  // Related Concepts
  if (theory.relatedConcepts && theory.relatedConcepts.length > 0) {
    groups.push({
      title: "Related Concepts",
      type: "concept",
      items: theory.relatedConcepts
        .map((conceptId) => {
          const concept = CONCEPTS[conceptId];
          return concept
            ? {
                id: conceptId,
                type: "concept" as const,
                title: concept.name,
                description: concept.definition.substring(0, 100) + "...",
                color: concept.color,
                path: `/concept-atlas?concept=${conceptId}`,
              }
            : null;
        })
        .filter((item) => item !== null) as AtlasLink[],
    });
  }

  // Related Debates
  if (theory.relatedDebates && theory.relatedDebates.length > 0) {
    groups.push({
      title: "Related Debates",
      type: "debate",
      items: theory.relatedDebates.map((debateId) => ({
        id: debateId,
        type: "debate" as const,
        title: debateId.replace(/-/g, " ").toUpperCase(),
        path: `/debate-atlas?debate=${debateId}`,
      })),
    });
  }

  // Related Authors (from researchers list)
  if (theory.researchers && theory.researchers.length > 0) {
    groups.push({
      title: "Key Researchers",
      type: "author",
      items: theory.researchers.map((researcher) => ({
        id: researcher.toLowerCase().replace(/\s+/g, "-"),
        type: "author" as const,
        title: researcher,
        path: `/author-atlas?author=${researcher.toLowerCase().replace(/\s+/g, "-")}`,
      })),
    });
  }

  // Related Books
  if (theory.keyBooks && theory.keyBooks.length > 0) {
    groups.push({
      title: "Essential Books",
      type: "book",
      items: theory.keyBooks
        .map((bookId) => {
          const book = BOOKS[bookId];
          return book
            ? {
                id: bookId,
                type: "book" as const,
                title: book.title,
                description: `by ${book.author}`,
                path: `/book-atlas?book=${bookId}`,
              }
            : null;
        })
        .filter((item) => item !== null) as AtlasLink[],
    });
  }

  return groups;
}

// Concept-related links
export function getConceptLinks(conceptId: string): CrossLinkGroup[] {
  const concept = CONCEPTS[conceptId];
  if (!concept) return [];

  const groups: CrossLinkGroup[] = [];

  // Related Theories
  if (concept.relatedTheories && concept.relatedTheories.length > 0) {
    groups.push({
      title: "Related Theories",
      type: "theory",
      items: concept.relatedTheories
        .map((theoryId) => {
          const theory = THEORIES[theoryId];
          return theory
            ? {
                id: theoryId,
                type: "theory" as const,
                title: theory.name,
                description: theory.shortDescription,
                color: theory.color,
                path: `/theory-comparison?theory=${theoryId}`,
              }
            : null;
        })
        .filter((item) => item !== null) as AtlasLink[],
    });
  }

  // Related Concepts
  if (concept.connections && concept.connections.length > 0) {
    const relatedConcepts = concept.connections
      .map((conn) => {
        const relatedConcept = CONCEPTS[conn.conceptId];
        return relatedConcept
          ? {
              id: conn.conceptId,
              type: "concept" as const,
              title: relatedConcept.name,
              description: `${conn.relationship} ${concept.name}`,
              color: relatedConcept.color,
              path: `/concept-atlas?concept=${conn.conceptId}`,
            }
          : null;
      })
      .filter((item) => item !== null) as AtlasLink[];

    if (relatedConcepts.length > 0) {
      groups.push({
        title: "Related Concepts",
        type: "concept",
        items: relatedConcepts,
      });
    }
  }

  // Related Debates
  if (concept.majorDebates && concept.majorDebates.length > 0) {
    groups.push({
      title: "Related Debates",
      type: "debate",
      items: concept.majorDebates.map((debate) => ({
        id: debate.toLowerCase().replace(/\s+/g, "-"),
        type: "debate" as const,
        title: debate,
        path: `/debate-atlas?debate=${debate.toLowerCase().replace(/\s+/g, "-")}`,
      })),
    });
  }

  // Related Authors
  if (concept.keyResearchers && concept.keyResearchers.length > 0) {
    groups.push({
      title: "Key Researchers",
      type: "author",
      items: concept.keyResearchers.map((researcher) => ({
        id: researcher.toLowerCase().replace(/\s+/g, "-"),
        type: "author" as const,
        title: researcher,
        path: `/author-atlas?author=${researcher.toLowerCase().replace(/\s+/g, "-")}`,
      })),
    });
  }

  // Related Books
  if (concept.recommendedBooks && concept.recommendedBooks.length > 0) {
    groups.push({
      title: "Recommended Books",
      type: "book",
      items: concept.recommendedBooks
        .map((bookTitle) => {
          // Find book by title
          const book = Object.values(BOOKS).find((b) => b.title === bookTitle);
          return book
            ? {
                id: book.id,
                type: "book" as const,
                title: book.title,
                description: `by ${book.author}`,
                path: `/book-atlas?book=${book.id}`,
              }
            : null;
        })
        .filter((item) => item !== null) as AtlasLink[],
    });
  }

  return groups;
}

// Debate-related links
export interface DebateData {
  id: string;
  title: string;
  positions: Array<{
    name: string;
    proponents: string[];
  }>;
}

export function getDebateLinks(debateId: string, allDebates: DebateData[]): CrossLinkGroup[] {
  const debate = allDebates.find((d) => d.id === debateId);
  if (!debate) return [];

  const groups: CrossLinkGroup[] = [];

  // Find theories that address this debate
  const relatedTheories = Object.entries(THEORIES)
    .filter(([_, theory]) => theory.relatedDebates?.includes(debateId))
    .map(([theoryId, theory]) => ({
      id: theoryId,
      type: "theory" as const,
      title: theory.name,
      description: theory.shortDescription,
      color: theory.color,
      path: `/theory-comparison?theory=${theoryId}`,
    }));

  if (relatedTheories.length > 0) {
    groups.push({
      title: "Competing Theories",
      type: "theory",
      items: relatedTheories,
    });
  }

  // Key researchers (from debate positions)
  const researchers = new Set<string>();
  debate.positions.forEach((position) => {
    position.proponents.forEach((proponent) => {
      researchers.add(proponent);
    });
  });

  if (researchers.size > 0) {
    groups.push({
      title: "Key Researchers",
      type: "author",
      items: Array.from(researchers).map((researcher) => ({
        id: researcher.toLowerCase().replace(/\s+/g, "-"),
        type: "author" as const,
        title: researcher,
        path: `/author-atlas?author=${researcher.toLowerCase().replace(/\s+/g, "-")}`,
      })),
    });
  }

  // Find related concepts
  const relatedConcepts = Object.entries(CONCEPTS)
    .filter(([_, concept]) => concept.majorDebates?.includes(debate.title))
    .map(([conceptId, concept]) => ({
      id: conceptId,
      type: "concept" as const,
      title: concept.name,
      description: concept.definition.substring(0, 100) + "...",
      color: concept.color,
      path: `/concept-atlas?concept=${conceptId}`,
    }));

  if (relatedConcepts.length > 0) {
    groups.push({
      title: "Related Concepts",
      type: "concept",
      items: relatedConcepts,
    });
  }

  return groups;
}

// Author-related links
export function getAuthorLinks(authorName: string): CrossLinkGroup[] {
  const groups: CrossLinkGroup[] = [];

  // Find theories by this author
  const authorTheories = Object.entries(THEORIES)
    .filter(([_, theory]) => theory.researchers.includes(authorName))
    .map(([theoryId, theory]) => ({
      id: theoryId,
      type: "theory" as const,
      title: theory.name,
      description: theory.shortDescription,
      color: theory.color,
      path: `/theory-comparison?theory=${theoryId}`,
    }));

  if (authorTheories.length > 0) {
    groups.push({
      title: "Theories",
      type: "theory",
      items: authorTheories,
    });
  }

  // Find concepts by this author
  const authorConcepts = Object.entries(CONCEPTS)
    .filter(([_, concept]) => concept.keyResearchers.includes(authorName))
    .map(([conceptId, concept]) => ({
      id: conceptId,
      type: "concept" as const,
      title: concept.name,
      description: concept.definition.substring(0, 100) + "...",
      color: concept.color,
      path: `/concept-atlas?concept=${conceptId}`,
    }));

  if (authorConcepts.length > 0) {
    groups.push({
      title: "Concepts",
      type: "concept",
      items: authorConcepts,
    });
  }

  // Find books by this author (from book data)
  const authorBooks = Object.entries(BOOKS)
    .filter(([_, book]) => book.author === authorName)
    .map(([bookId, book]) => ({
      id: bookId,
      type: "book" as const,
      title: book.title,
      description: `Published ${book.year}`,
      path: `/book-atlas?book=${bookId}`,
    }));

  if (authorBooks.length > 0) {
    groups.push({
      title: "Books",
      type: "book",
      items: authorBooks,
    });
  }

  return groups;
}

// Book-related links
export function getBookLinks(bookId: string): CrossLinkGroup[] {
  const book = BOOKS[bookId];
  if (!book) return [];

  const groups: CrossLinkGroup[] = [];

  // Related theories
  if (book.relatedTheories && book.relatedTheories.length > 0) {
    groups.push({
      title: "Related Theories",
      type: "theory",
      items: book.relatedTheories
        .map((theoryId) => {
          const theory = THEORIES[theoryId];
          return theory
            ? {
                id: theoryId,
                type: "theory" as const,
                title: theory.name,
                description: theory.shortDescription,
                color: theory.color,
                path: `/theory-comparison?theory=${theoryId}`,
              }
            : null;
        })
        .filter((item) => item !== null) as AtlasLink[],
    });
  }

  // Related concepts (from keyConcepts)
  if (book.keyConcepts && book.keyConcepts.length > 0) {
    const conceptItems: AtlasLink[] = [];
    book.keyConcepts.forEach((conceptName) => {
      // Find concept by name
      const conceptEntry = Object.entries(CONCEPTS).find(([_, c]) => c.name === conceptName);
      if (conceptEntry) {
        conceptItems.push({
          id: conceptEntry[0],
          type: "concept",
          title: conceptEntry[1].name,
          description: conceptEntry[1].definition.substring(0, 100) + "...",
          color: conceptEntry[1].color,
          path: `/concept-atlas?concept=${conceptEntry[0]}`,
        });
      }
    });

    if (conceptItems.length > 0) {
      groups.push({
        title: "Related Concepts",
        type: "concept",
        items: conceptItems,
      });
    }
  }

  // Author
  if (book.author) {
    const authorLink: AtlasLink = {
      id: book.author.toLowerCase().replace(/\s+/g, "-"),
      type: "author",
      title: book.author,
      path: `/author-atlas?author=${book.author.toLowerCase().replace(/\s+/g, "-")}`,
    };
    groups.push({
      title: "Author",
      type: "author",
      items: [authorLink],
    });
  }

  return groups;
}

// Utility to get all links for a specific item
export function getAllLinks(
  itemId: string,
  itemType: "theory" | "concept" | "author" | "debate" | "book",
  allDebates?: DebateData[]
): CrossLinkGroup[] {
  switch (itemType) {
    case "theory":
      return getTheoryLinks(itemId);
    case "concept":
      return getConceptLinks(itemId);
    case "author":
      return getAuthorLinks(itemId);
    case "debate":
      return getDebateLinks(itemId, allDebates || []);
    case "book":
      return getBookLinks(itemId);
    default:
      return [];
  }
}
