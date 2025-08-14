import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: () => { },
    removeFavourite: (meetupId) => { },
    itemIsFavourite: (meetupId) => { }
});

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(meetup => meetup.Id !== meetupId);
        })
    }

    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetupId === meetupId);

    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return (
    <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
    );
}

export default FavouritesContext;