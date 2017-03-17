
export default {

  hbuilder: {
    ajax: require('./hbuilder/ajax').default,
    event: require('./hbuilder/event').default,
    loading: require('./hbuilder/loading').default,
    page: require('./hbuilder/page').default,
    payment: require('./hbuilder/payment').default,
    push: require('./hbuilder/push').default,
    ready: require('./hbuilder/ready').default,
    runtime: require('./hbuilder/runtime').default,
    share: require('./hbuilder/share').default,
    stat: require('./hbuilder/stat').default,
    ui: require('./hbuilder/ui').default,
    update: require('./hbuilder/update').default,
    uploader: require('./hbuilder/uploader').default,
    user: require('./hbuilder/user').default,
    zoom: require('./hbuilder/zoom').default,
    wrapupdate: require('./hbuilder/wrapupdate').default
  },

  mock: {
    ajax: require('./mock/ajax').default,
    event: require('./mock/event').default,
    loading: require('./mock/loading').default,
    page: require('./mock/page').default,
    payment: require('./mock/payment').default,
    push: require('./mock/push').default,
    ready: require('./mock/ready').default,
    runtime: require('./mock/runtime').default,
    share: require('./mock/share').default,
    stat: require('./mock/stat').default,
    ui: require('./mock/ui').default,
    update: require('./mock/update').default,
    uploader: require('./mock/uploader').default,
    user: require('./mock/user').default,
    wrapupdate: require('./mock/wrapupdate').default
  },

  wx: {
    ajax: require('./wx/ajax').default,
    event: require('./wx/event').default,
    loading: require('./wx/loading').default,
    page: require('./wx/page').default,
    payment: require('./wx/payment').default,
    push: require('./wx/push').default,
    ready: require('./wx/ready').default,
    runtime: require('./wx/runtime').default,
    share: require('./wx/share').default,
    stat: require('./wx/stat').default,
    ui: require('./wx/ui').default,
    update: require('./wx/update').default,
    uploader: require('./wx/uploader').default,
    user: require('./wx/user').default
  },
}