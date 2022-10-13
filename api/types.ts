/**
 * reference docs: https://docs.github.com/en/rest/search#search-repositories
 */

export interface ListReposOptions {
  /**
   * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see Constructing a search query. See "Searching for repositories" for a detailed list of qualifiers.
   */
  q: string
  /**
   * Sorts the results of your query by number of stars, forks, or help-wanted-issues or how recently the items were updated. Default: best match
   */
  sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated'
  /**
   * Determines whether the first search result returned is the highest number of matches (desc) or lowest number of matches (asc). This parameter is ignored unless you provide sort.
   * Default: desc
   */
  order?: 'desc' | 'asc'
  /**
   * The number of results per page (max 100).
   * Default: 30
   */
  per_page?: number
  /**
   * Page number of the results to fetch.
   * Default: 1
   */
  page?: number
}
