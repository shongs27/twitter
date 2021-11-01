module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //MySQL에는 users 테이블 생성
      //id가 기본적으로 들어있다
      email: {
        //칼럼 설정
        type: DataTypes.STRING(30), //STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
        allowNull: false, //필수
        unique: true, //고유한 값 - 중복x
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, //필수
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", //한글 저장
    }
  );
  //관계
  User.associate = (db) => {
    //사용자와 포스트의 관계
    db.User.hasMany(db.Post);
    //사용자와 포스트- 좋아요의 관계
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.hasMany(db.Comment);
    //User - User 끼리는 헷갈리기 때문에 foreignKey
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  };
  return User;
};
