module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      //한글에 이모티콘까지는 utf8nb4
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //이모티콘까지 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); //Post.addUser, Post.getUser, Post.setUser
    //through는 중간에 생기는 테이블 이름, as는 참조할때 쓸 이름
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); //Post.addLikers, Post.removeLikers
    db.Post.hasMany(db.Comment); //Post.addComments
    db.Post.hasMany(db.Image); //Post.addImage
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //Post.addHashtags
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //Post.addRetweet
  };
  return Post;
};
