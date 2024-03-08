import { buildConfigWithDefaults } from '../buildConfigWithDefaults.js'
import AutosavePosts from './collections/Autosave.js'
import CustomIDs from './collections/CustomIDs.js'
import DisablePublish from './collections/DisablePublish.js'
import DraftPosts from './collections/Drafts.js'
import Posts from './collections/Posts.js'
import VersionPosts from './collections/Versions.js'
import AutosaveGlobal from './globals/Autosave.js'
import DisablePublishGlobal from './globals/DisablePublish.js'
import DraftGlobal from './globals/Draft.js'
import { clearAndSeedEverything } from './seed.js'

export default buildConfigWithDefaults({
  collections: [DisablePublish, Posts, AutosavePosts, DraftPosts, VersionPosts, CustomIDs],
  globals: [AutosaveGlobal, DraftGlobal, DisablePublishGlobal],
  indexSortableFields: true,
  localization: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  onInit: async (payload) => {
    await clearAndSeedEverything(payload)
  },
})
