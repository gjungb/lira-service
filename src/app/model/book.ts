/**
 * Ein tolles Buch
 */
export interface Book {
    /**
     * Der Titel
     */
    title: string;
    /**
     * Der Untertitel
     */
    subtitle: string;
    /**
     * Die eindeutige ISBN
     */
    isbn: string;
    /**
     * Die Anzahl an Seiten
     */
    numPages?: number;
}
