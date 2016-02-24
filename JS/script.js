
var feed = new Instafeed({
    get: 'tagged',
    tagName: 'yeezyforsale',
    limit: "32",
    // resolution: 'low_resolution',
        // userId: '26620985',
    accessToken: '26620985.745c638.74a59aa021a84eeab1d50b4c7c687180'
        // clientId: 'ef2697a072c24e968b67f86c7850f95c'
    });

feed.run();