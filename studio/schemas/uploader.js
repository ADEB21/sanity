export default {
    name: 'uploader',
    title: 'Uploader',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'Prénom',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Nom',
        type: 'string',
      },
      {
        name: 'video',
        title: 'Vidéo',
        type: 'file',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  