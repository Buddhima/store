var assetLinks = function (user) {
    return {
        title: 'Recipes',
        links: [
            {
                title: 'recipes',
                url: ''
            },
            {
                title: 'Bookmarks',
                url: 'bookmarks',
                path: 'bookmarks.jag'
            }
        ]};
};

//asset.server = function(ctx) {
//    var type = ctx.type;
//    return {
//        onUserLoggedIn: function() {},
//        endpoints: {
//            apis: [{
//                url: 'assets',
//                path: 'assets.jag'
//            },
//            {
//                url: 'use_recipe',
//                path:'use_recipe.jag'
//            }]
//        }
//    };
//};
