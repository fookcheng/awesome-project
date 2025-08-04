exports.encodeLanguageCode = {
  UNSPECIFIED: 0,
  EN: 1,
  PH: 2,
  KR: 3,
};

exports.decodeLanguageCode = {
  0: "UNSPECIFIED",
  1: "EN",
  2: "PH",
  3: "KR",
};

exports.encodePageResourceReq = function (message) {
  var bb = popByteBuffer();
  _encodePageResourceReq(message, bb);
  return toUint8Array(bb);
}

function _encodePageResourceReq(message, bb) {
  // optional string resourceId = 1;
  var $resourceId = message.resourceId;
  if ($resourceId !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $resourceId);
  }

  // optional LanguageCode languageCode = 2;
  var $languageCode = message.languageCode;
  if ($languageCode !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, exports.encodeLanguageCode[$languageCode]);
  }

  // optional string eId = 3;
  var $eId = message.eId;
  if ($eId !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $eId);
  }

  // optional string partnerId = 4;
  var $partnerId = message.partnerId;
  if ($partnerId !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $partnerId);
  }
};

exports.decodePageResourceReq = function (binary) {
  return _decodePageResourceReq(wrapByteBuffer(binary));
}

function _decodePageResourceReq(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string resourceId = 1;
      case 1: {
        message.resourceId = readString(bb, readVarint32(bb));
        break;
      }

      // optional LanguageCode languageCode = 2;
      case 2: {
        message.languageCode = exports.decodeLanguageCode[readVarint32(bb)];
        break;
      }

      // optional string eId = 3;
      case 3: {
        message.eId = readString(bb, readVarint32(bb));
        break;
      }

      // optional string partnerId = 4;
      case 4: {
        message.partnerId = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodePageGameListReq = function (message) {
  var bb = popByteBuffer();
  _encodePageGameListReq(message, bb);
  return toUint8Array(bb);
}

function _encodePageGameListReq(message, bb) {
  // optional string resourceId = 1;
  var $resourceId = message.resourceId;
  if ($resourceId !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $resourceId);
  }

  // optional string primaryCategory = 2;
  var $primaryCategory = message.primaryCategory;
  if ($primaryCategory !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $primaryCategory);
  }

  // optional string secondaryCategory = 3;
  var $secondaryCategory = message.secondaryCategory;
  if ($secondaryCategory !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $secondaryCategory);
  }

  // optional string subCategory = 4;
  var $subCategory = message.subCategory;
  if ($subCategory !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $subCategory);
  }

  // optional string providerId = 5;
  var $providerId = message.providerId;
  if ($providerId !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $providerId);
  }

  // optional common.Pagination pagination = 6;
  var $pagination = message.pagination;
  if ($pagination !== undefined) {
    writeVarint32(bb, 50);
    var nested = popByteBuffer();
    _encodecommon.Pagination($pagination, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
};

exports.decodePageGameListReq = function (binary) {
  return _decodePageGameListReq(wrapByteBuffer(binary));
}

function _decodePageGameListReq(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string resourceId = 1;
      case 1: {
        message.resourceId = readString(bb, readVarint32(bb));
        break;
      }

      // optional string primaryCategory = 2;
      case 2: {
        message.primaryCategory = readString(bb, readVarint32(bb));
        break;
      }

      // optional string secondaryCategory = 3;
      case 3: {
        message.secondaryCategory = readString(bb, readVarint32(bb));
        break;
      }

      // optional string subCategory = 4;
      case 4: {
        message.subCategory = readString(bb, readVarint32(bb));
        break;
      }

      // optional string providerId = 5;
      case 5: {
        message.providerId = readString(bb, readVarint32(bb));
        break;
      }

      // optional common.Pagination pagination = 6;
      case 6: {
        var limit = pushTemporaryLength(bb);
        message.pagination = _decodecommon.Pagination(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeComponentData = function (message) {
  var bb = popByteBuffer();
  _encodeComponentData(message, bb);
  return toUint8Array(bb);
}

function _encodeComponentData(message, bb) {
  // optional string name = 1;
  var $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $name);
  }

  // optional int32 type = 2;
  var $type = message.type;
  if ($type !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($type));
  }

  // optional cmsCommon.ComponentConfig config = 3;
  var $config = message.config;
  if ($config !== undefined) {
    writeVarint32(bb, 26);
    var nested = popByteBuffer();
    _encodecmsCommon.ComponentConfig($config, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
};

exports.decodeComponentData = function (binary) {
  return _decodeComponentData(wrapByteBuffer(binary));
}

function _decodeComponentData(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string name = 1;
      case 1: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 type = 2;
      case 2: {
        message.type = readVarint32(bb);
        break;
      }

      // optional cmsCommon.ComponentConfig config = 3;
      case 3: {
        var limit = pushTemporaryLength(bb);
        message.config = _decodecmsCommon.ComponentConfig(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodePageResourceRes = function (message) {
  var bb = popByteBuffer();
  _encodePageResourceRes(message, bb);
  return toUint8Array(bb);
}

function _encodePageResourceRes(message, bb) {
  // optional common.BaseResponse baseResponse = 1;
  var $baseResponse = message.baseResponse;
  if ($baseResponse !== undefined) {
    writeVarint32(bb, 10);
    var nested = popByteBuffer();
    _encodecommon.BaseResponse($baseResponse, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ReturnData data = 2;
  var $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 18);
    var nested = popByteBuffer();
    _encodeReturnData($data, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
};

exports.decodePageResourceRes = function (binary) {
  return _decodePageResourceRes(wrapByteBuffer(binary));
}

function _decodePageResourceRes(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional common.BaseResponse baseResponse = 1;
      case 1: {
        var limit = pushTemporaryLength(bb);
        message.baseResponse = _decodecommon.BaseResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional ReturnData data = 2;
      case 2: {
        var limit = pushTemporaryLength(bb);
        message.data = _decodeReturnData(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodePageGameListRes = function (message) {
  var bb = popByteBuffer();
  _encodePageGameListRes(message, bb);
  return toUint8Array(bb);
}

function _encodePageGameListRes(message, bb) {
  // optional common.BaseResponse baseResponse = 1;
  var $baseResponse = message.baseResponse;
  if ($baseResponse !== undefined) {
    writeVarint32(bb, 10);
    var nested = popByteBuffer();
    _encodecommon.BaseResponse($baseResponse, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ReturnData data = 2;
  var $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 18);
    var nested = popByteBuffer();
    _encodeReturnData($data, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
};

exports.decodePageGameListRes = function (binary) {
  return _decodePageGameListRes(wrapByteBuffer(binary));
}

function _decodePageGameListRes(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional common.BaseResponse baseResponse = 1;
      case 1: {
        var limit = pushTemporaryLength(bb);
        message.baseResponse = _decodecommon.BaseResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional ReturnData data = 2;
      case 2: {
        var limit = pushTemporaryLength(bb);
        message.data = _decodeReturnData(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeJackpotResourcesReq = function (message) {
  var bb = popByteBuffer();
  _encodeJackpotResourcesReq(message, bb);
  return toUint8Array(bb);
}

function _encodeJackpotResourcesReq(message, bb) {
  // optional string articleObjId = 1;
  var $articleObjId = message.articleObjId;
  if ($articleObjId !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $articleObjId);
  }

  // optional string resourceId = 2;
  var $resourceId = message.resourceId;
  if ($resourceId !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $resourceId);
  }

  // optional common.Pagination pagination = 3;
  var $pagination = message.pagination;
  if ($pagination !== undefined) {
    writeVarint32(bb, 26);
    var nested = popByteBuffer();
    _encodecommon.Pagination($pagination, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string gameName = 4;
  var $gameName = message.gameName;
  if ($gameName !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $gameName);
  }
};

exports.decodeJackpotResourcesReq = function (binary) {
  return _decodeJackpotResourcesReq(wrapByteBuffer(binary));
}

function _decodeJackpotResourcesReq(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string articleObjId = 1;
      case 1: {
        message.articleObjId = readString(bb, readVarint32(bb));
        break;
      }

      // optional string resourceId = 2;
      case 2: {
        message.resourceId = readString(bb, readVarint32(bb));
        break;
      }

      // optional common.Pagination pagination = 3;
      case 3: {
        var limit = pushTemporaryLength(bb);
        message.pagination = _decodecommon.Pagination(bb);
        bb.limit = limit;
        break;
      }

      // optional string gameName = 4;
      case 4: {
        message.gameName = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeJackpotResourcesRes = function (message) {
  var bb = popByteBuffer();
  _encodeJackpotResourcesRes(message, bb);
  return toUint8Array(bb);
}

function _encodeJackpotResourcesRes(message, bb) {
  // optional common.BaseResponse baseResponse = 1;
  var $baseResponse = message.baseResponse;
  if ($baseResponse !== undefined) {
    writeVarint32(bb, 10);
    var nested = popByteBuffer();
    _encodecommon.BaseResponse($baseResponse, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ReturnData data = 2;
  var $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 18);
    var nested = popByteBuffer();
    _encodeReturnData($data, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
};

exports.decodeJackpotResourcesRes = function (binary) {
  return _decodeJackpotResourcesRes(wrapByteBuffer(binary));
}

function _decodeJackpotResourcesRes(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional common.BaseResponse baseResponse = 1;
      case 1: {
        var limit = pushTemporaryLength(bb);
        message.baseResponse = _decodecommon.BaseResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional ReturnData data = 2;
      case 2: {
        var limit = pushTemporaryLength(bb);
        message.data = _decodeReturnData(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeReadPopupReq = function (message) {
  var bb = popByteBuffer();
  _encodeReadPopupReq(message, bb);
  return toUint8Array(bb);
}

function _encodeReadPopupReq(message, bb) {
  // optional string popupId = 1;
  var $popupId = message.popupId;
  if ($popupId !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $popupId);
  }
};

exports.decodeReadPopupReq = function (binary) {
  return _decodeReadPopupReq(wrapByteBuffer(binary));
}

function _decodeReadPopupReq(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string popupId = 1;
      case 1: {
        message.popupId = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeGetAmbassadorConfigReq = function (message) {
  var bb = popByteBuffer();
  _encodeGetAmbassadorConfigReq(message, bb);
  return toUint8Array(bb);
}

function _encodeGetAmbassadorConfigReq(message, bb) {
  // optional common.Pagination pagination = 1;
  var $pagination = message.pagination;
  if ($pagination !== undefined) {
    writeVarint32(bb, 10);
    var nested = popByteBuffer();
    _encodecommon.Pagination($pagination, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
};

exports.decodeGetAmbassadorConfigReq = function (binary) {
  return _decodeGetAmbassadorConfigReq(wrapByteBuffer(binary));
}

function _decodeGetAmbassadorConfigReq(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional common.Pagination pagination = 1;
      case 1: {
        var limit = pushTemporaryLength(bb);
        message.pagination = _decodecommon.Pagination(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeGetAmbassadorConfigRes = function (message) {
  var bb = popByteBuffer();
  _encodeGetAmbassadorConfigRes(message, bb);
  return toUint8Array(bb);
}

function _encodeGetAmbassadorConfigRes(message, bb) {
  // optional common.BaseResponse baseResponse = 1;
  var $baseResponse = message.baseResponse;
  if ($baseResponse !== undefined) {
    writeVarint32(bb, 10);
    var nested = popByteBuffer();
    _encodecommon.BaseResponse($baseResponse, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // repeated AmbassadorConfig data = 2;
  var array$data = message.data;
  if (array$data !== undefined) {
    for (var i = 0; i < array$data.length; i++) {
      var value = array$data[i];
      writeVarint32(bb, 18);
      var nested = popByteBuffer();
      _encodeAmbassadorConfig(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int32 total = 3;
  var $total = message.total;
  if ($total !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($total));
  }
};

exports.decodeGetAmbassadorConfigRes = function (binary) {
  return _decodeGetAmbassadorConfigRes(wrapByteBuffer(binary));
}

function _decodeGetAmbassadorConfigRes(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional common.BaseResponse baseResponse = 1;
      case 1: {
        var limit = pushTemporaryLength(bb);
        message.baseResponse = _decodecommon.BaseResponse(bb);
        bb.limit = limit;
        break;
      }

      // repeated AmbassadorConfig data = 2;
      case 2: {
        var limit = pushTemporaryLength(bb);
        var values = message.data || (message.data = []);
        values.push(_decodeAmbassadorConfig(bb));
        bb.limit = limit;
        break;
      }

      // optional int32 total = 3;
      case 3: {
        message.total = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeGetAmbassadorConfigDetailReq = function (message) {
  var bb = popByteBuffer();
  _encodeGetAmbassadorConfigDetailReq(message, bb);
  return toUint8Array(bb);
}

function _encodeGetAmbassadorConfigDetailReq(message, bb) {
  // optional string ambassadorObjId = 1;
  var $ambassadorObjId = message.ambassadorObjId;
  if ($ambassadorObjId !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $ambassadorObjId);
  }

  // optional common.Pagination pagination = 2;
  var $pagination = message.pagination;
  if ($pagination !== undefined) {
    writeVarint32(bb, 18);
    var nested = popByteBuffer();
    _encodecommon.Pagination($pagination, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
};

exports.decodeGetAmbassadorConfigDetailReq = function (binary) {
  return _decodeGetAmbassadorConfigDetailReq(wrapByteBuffer(binary));
}

function _decodeGetAmbassadorConfigDetailReq(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string ambassadorObjId = 1;
      case 1: {
        message.ambassadorObjId = readString(bb, readVarint32(bb));
        break;
      }

      // optional common.Pagination pagination = 2;
      case 2: {
        var limit = pushTemporaryLength(bb);
        message.pagination = _decodecommon.Pagination(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeGetAmbassadorConfigDetailRes = function (message) {
  var bb = popByteBuffer();
  _encodeGetAmbassadorConfigDetailRes(message, bb);
  return toUint8Array(bb);
}

function _encodeGetAmbassadorConfigDetailRes(message, bb) {
  // optional common.BaseResponse baseResponse = 1;
  var $baseResponse = message.baseResponse;
  if ($baseResponse !== undefined) {
    writeVarint32(bb, 10);
    var nested = popByteBuffer();
    _encodecommon.BaseResponse($baseResponse, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional AmbassadorDetailConfig data = 2;
  var $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 18);
    var nested = popByteBuffer();
    _encodeAmbassadorDetailConfig($data, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
};

exports.decodeGetAmbassadorConfigDetailRes = function (binary) {
  return _decodeGetAmbassadorConfigDetailRes(wrapByteBuffer(binary));
}

function _decodeGetAmbassadorConfigDetailRes(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional common.BaseResponse baseResponse = 1;
      case 1: {
        var limit = pushTemporaryLength(bb);
        message.baseResponse = _decodecommon.BaseResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional AmbassadorDetailConfig data = 2;
      case 2: {
        var limit = pushTemporaryLength(bb);
        message.data = _decodeAmbassadorDetailConfig(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeAmbassadorRecommendGame = function (message) {
  var bb = popByteBuffer();
  _encodeAmbassadorRecommendGame(message, bb);
  return toUint8Array(bb);
}

function _encodeAmbassadorRecommendGame(message, bb) {
  // optional string ambassadorObjId = 1;
  var $ambassadorObjId = message.ambassadorObjId;
  if ($ambassadorObjId !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $ambassadorObjId);
  }

  // optional string title = 2;
  var $title = message.title;
  if ($title !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $title);
  }

  // repeated AmbassadorGame game = 3;
  var array$game = message.game;
  if (array$game !== undefined) {
    for (var i = 0; i < array$game.length; i++) {
      var value = array$game[i];
      writeVarint32(bb, 26);
      var nested = popByteBuffer();
      _encodeAmbassadorGame(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional cmsCommon.Status status = 4;
  var $status = message.status;
  if ($status !== undefined) {
    writeVarint32(bb, 34);
    var nested = popByteBuffer();
    _encodecmsCommon.Status($status, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
};

exports.decodeAmbassadorRecommendGame = function (binary) {
  return _decodeAmbassadorRecommendGame(wrapByteBuffer(binary));
}

function _decodeAmbassadorRecommendGame(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string ambassadorObjId = 1;
      case 1: {
        message.ambassadorObjId = readString(bb, readVarint32(bb));
        break;
      }

      // optional string title = 2;
      case 2: {
        message.title = readString(bb, readVarint32(bb));
        break;
      }

      // repeated AmbassadorGame game = 3;
      case 3: {
        var limit = pushTemporaryLength(bb);
        var values = message.game || (message.game = []);
        values.push(_decodeAmbassadorGame(bb));
        bb.limit = limit;
        break;
      }

      // optional cmsCommon.Status status = 4;
      case 4: {
        var limit = pushTemporaryLength(bb);
        message.status = _decodecmsCommon.Status(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

exports.encodeAmbassadorGame = function (message) {
  var bb = popByteBuffer();
  _encodeAmbassadorGame(message, bb);
  return toUint8Array(bb);
}

function _encodeAmbassadorGame(message, bb) {
  // optional string gameId = 1;
  var $gameId = message.gameId;
  if ($gameId !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $gameId);
  }

  // optional string gameName = 2;
  var $gameName = message.gameName;
  if ($gameName !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $gameName);
  }

  // optional string tableCode = 3;
  var $tableCode = message.tableCode;
  if ($tableCode !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $tableCode);
  }

  // optional string providerId = 4;
  var $providerId = message.providerId;
  if ($providerId !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $providerId);
  }

  // optional string gameImageUrl = 5;
  var $gameImageUrl = message.gameImageUrl;
  if ($gameImageUrl !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $gameImageUrl);
  }

  // optional string bigGameImageUrl = 6;
  var $bigGameImageUrl = message.bigGameImageUrl;
  if ($bigGameImageUrl !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $bigGameImageUrl);
  }
};

exports.decodeAmbassadorGame = function (binary) {
  return _decodeAmbassadorGame(wrapByteBuffer(binary));
}

function _decodeAmbassadorGame(bb) {
  var message = {};

  end_of_message: while (!isAtEnd(bb)) {
    var tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string gameId = 1;
      case 1: {
        message.gameId = readString(bb, readVarint32(bb));
        break;
      }

      // optional string gameName = 2;
      case 2: {
        message.gameName = readString(bb, readVarint32(bb));
        break;
      }

      // optional string tableCode = 3;
      case 3: {
        message.tableCode = readString(bb, readVarint32(bb));
        break;
      }

      // optional string providerId = 4;
      case 4: {
        message.providerId = readString(bb, readVarint32(bb));
        break;
      }

      // optional string gameImageUrl = 5;
      case 5: {
        message.gameImageUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional string bigGameImageUrl = 6;
      case 6: {
        message.bigGameImageUrl = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
};

function pushTemporaryLength(bb) {
  var length = readVarint32(bb);
  var limit = bb.limit;
  bb.limit = bb.offset + length;
  return limit;
}

function skipUnknownField(bb, type) {
  switch (type) {
    case 0: while (readByte(bb) & 0x80) { } break;
    case 2: skip(bb, readVarint32(bb)); break;
    case 5: skip(bb, 4); break;
    case 1: skip(bb, 8); break;
    default: throw new Error("Unimplemented type: " + type);
  }
}

function stringToLong(value) {
  return {
    low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),
    high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),
    unsigned: false,
  };
}

function longToString(value) {
  var low = value.low;
  var high = value.high;
  return String.fromCharCode(
    low & 0xFFFF,
    low >>> 16,
    high & 0xFFFF,
    high >>> 16);
}

// The code below was modified from https://github.com/protobufjs/bytebuffer.js
// which is under the Apache License 2.0.

var f32 = new Float32Array(1);
var f32_u8 = new Uint8Array(f32.buffer);

var f64 = new Float64Array(1);
var f64_u8 = new Uint8Array(f64.buffer);

function intToLong(value) {
  value |= 0;
  return {
    low: value,
    high: value >> 31,
    unsigned: value >= 0,
  };
}

var bbStack = [];

function popByteBuffer() {
  const bb = bbStack.pop();
  if (!bb) return { bytes: new Uint8Array(64), offset: 0, limit: 0 };
  bb.offset = bb.limit = 0;
  return bb;
}

function pushByteBuffer(bb) {
  bbStack.push(bb);
}

function wrapByteBuffer(bytes) {
  return { bytes, offset: 0, limit: bytes.length };
}

function toUint8Array(bb) {
  var bytes = bb.bytes;
  var limit = bb.limit;
  return bytes.length === limit ? bytes : bytes.subarray(0, limit);
}

function skip(bb, offset) {
  if (bb.offset + offset > bb.limit) {
    throw new Error('Skip past limit');
  }
  bb.offset += offset;
}

function isAtEnd(bb) {
  return bb.offset >= bb.limit;
}

function grow(bb, count) {
  var bytes = bb.bytes;
  var offset = bb.offset;
  var limit = bb.limit;
  var finalOffset = offset + count;
  if (finalOffset > bytes.length) {
    var newBytes = new Uint8Array(finalOffset * 2);
    newBytes.set(bytes);
    bb.bytes = newBytes;
  }
  bb.offset = finalOffset;
  if (finalOffset > limit) {
    bb.limit = finalOffset;
  }
  return offset;
}

function advance(bb, count) {
  var offset = bb.offset;
  if (offset + count > bb.limit) {
    throw new Error('Read past limit');
  }
  bb.offset += count;
  return offset;
}

function readBytes(bb, count) {
  var offset = advance(bb, count);
  return bb.bytes.subarray(offset, offset + count);
}

function writeBytes(bb, buffer) {
  var offset = grow(bb, buffer.length);
  bb.bytes.set(buffer, offset);
}

function readString(bb, count) {
  // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8
  var offset = advance(bb, count);
  var fromCharCode = String.fromCharCode;
  var bytes = bb.bytes;
  var invalid = '\uFFFD';
  var text = '';

  for (var i = 0; i < count; i++) {
    var c1 = bytes[i + offset], c2, c3, c4, c;

    // 1 byte
    if ((c1 & 0x80) === 0) {
      text += fromCharCode(c1);
    }

    // 2 bytes
    else if ((c1 & 0xE0) === 0xC0) {
      if (i + 1 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        if ((c2 & 0xC0) !== 0x80) text += invalid;
        else {
          c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);
          if (c < 0x80) text += invalid;
          else {
            text += fromCharCode(c);
            i++;
          }
        }
      }
    }

    // 3 bytes
    else if ((c1 & 0xF0) == 0xE0) {
      if (i + 2 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080) text += invalid;
        else {
          c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
          if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF)) text += invalid;
          else {
            text += fromCharCode(c);
            i += 2;
          }
        }
      }
    }

    // 4 bytes
    else if ((c1 & 0xF8) == 0xF0) {
      if (i + 3 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        c4 = bytes[i + offset + 3];
        if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080) text += invalid;
        else {
          c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);
          if (c < 0x10000 || c > 0x10FFFF) text += invalid;
          else {
            c -= 0x10000;
            text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);
            i += 3;
          }
        }
      }
    }

    else text += invalid;
  }

  return text;
}

function writeString(bb, text) {
  // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8
  var n = text.length;
  var byteCount = 0;

  // Write the byte count first
  for (var i = 0; i < n; i++) {
    var c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }
  writeVarint32(bb, byteCount);

  var offset = grow(bb, byteCount);
  var bytes = bb.bytes;

  // Then write the bytes
  for (var i = 0; i < n; i++) {
    var c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    if (c < 0x80) {
      bytes[offset++] = c;
    } else {
      if (c < 0x800) {
        bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;
      } else {
        if (c < 0x10000) {
          bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;
        } else {
          bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;
          bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;
        }
        bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;
      }
      bytes[offset++] = (c & 0x3F) | 0x80;
    }
  }
}

function writeByteBuffer(bb, buffer) {
  var offset = grow(bb, buffer.limit);
  var from = bb.bytes;
  var to = buffer.bytes;

  // This for loop is much faster than subarray+set on V8
  for (var i = 0, n = buffer.limit; i < n; i++) {
    from[i + offset] = to[i];
  }
}

function readByte(bb) {
  return bb.bytes[advance(bb, 1)];
}

function writeByte(bb, value) {
  var offset = grow(bb, 1);
  bb.bytes[offset] = value;
}

function readFloat(bb) {
  var offset = advance(bb, 4);
  var bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f32_u8[0] = bytes[offset++];
  f32_u8[1] = bytes[offset++];
  f32_u8[2] = bytes[offset++];
  f32_u8[3] = bytes[offset++];
  return f32[0];
}

function writeFloat(bb, value) {
  var offset = grow(bb, 4);
  var bytes = bb.bytes;
  f32[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f32_u8[0];
  bytes[offset++] = f32_u8[1];
  bytes[offset++] = f32_u8[2];
  bytes[offset++] = f32_u8[3];
}

function readDouble(bb) {
  var offset = advance(bb, 8);
  var bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f64_u8[0] = bytes[offset++];
  f64_u8[1] = bytes[offset++];
  f64_u8[2] = bytes[offset++];
  f64_u8[3] = bytes[offset++];
  f64_u8[4] = bytes[offset++];
  f64_u8[5] = bytes[offset++];
  f64_u8[6] = bytes[offset++];
  f64_u8[7] = bytes[offset++];
  return f64[0];
}

function writeDouble(bb, value) {
  var offset = grow(bb, 8);
  var bytes = bb.bytes;
  f64[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f64_u8[0];
  bytes[offset++] = f64_u8[1];
  bytes[offset++] = f64_u8[2];
  bytes[offset++] = f64_u8[3];
  bytes[offset++] = f64_u8[4];
  bytes[offset++] = f64_u8[5];
  bytes[offset++] = f64_u8[6];
  bytes[offset++] = f64_u8[7];
}

function readInt32(bb) {
  var offset = advance(bb, 4);
  var bytes = bb.bytes;
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  );
}

function writeInt32(bb, value) {
  var offset = grow(bb, 4);
  var bytes = bb.bytes;
  bytes[offset] = value;
  bytes[offset + 1] = value >> 8;
  bytes[offset + 2] = value >> 16;
  bytes[offset + 3] = value >> 24;
}

function readInt64(bb, unsigned) {
  return {
    low: readInt32(bb),
    high: readInt32(bb),
    unsigned,
  };
}

function writeInt64(bb, value) {
  writeInt32(bb, value.low);
  writeInt32(bb, value.high);
}

function readVarint32(bb) {
  var c = 0;
  var value = 0;
  var b;
  do {
    b = readByte(bb);
    if (c < 32) value |= (b & 0x7F) << c;
    c += 7;
  } while (b & 0x80);
  return value;
}

function writeVarint32(bb, value) {
  value >>>= 0;
  while (value >= 0x80) {
    writeByte(bb, (value & 0x7f) | 0x80);
    value >>>= 7;
  }
  writeByte(bb, value);
}

function readVarint64(bb, unsigned) {
  var part0 = 0;
  var part1 = 0;
  var part2 = 0;
  var b;

  b = readByte(bb); part0 = (b & 0x7F); if (b & 0x80) {
    b = readByte(bb); part0 |= (b & 0x7F) << 7; if (b & 0x80) {
      b = readByte(bb); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
        b = readByte(bb); part0 |= (b & 0x7F) << 21; if (b & 0x80) {

          b = readByte(bb); part1 = (b & 0x7F); if (b & 0x80) {
            b = readByte(bb); part1 |= (b & 0x7F) << 7; if (b & 0x80) {
              b = readByte(bb); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
                b = readByte(bb); part1 |= (b & 0x7F) << 21; if (b & 0x80) {

                  b = readByte(bb); part2 = (b & 0x7F); if (b & 0x80) {
                    b = readByte(bb); part2 |= (b & 0x7F) << 7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    low: part0 | (part1 << 28),
    high: (part1 >>> 4) | (part2 << 24),
    unsigned,
  };
}

function writeVarint64(bb, value) {
  var part0 = value.low >>> 0;
  var part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;
  var part2 = value.high >>> 24;

  // ref: src/google/protobuf/io/coded_stream.cc
  var size =
    part2 === 0 ?
      part1 === 0 ?
        part0 < 1 << 14 ?
          part0 < 1 << 7 ? 1 : 2 :
          part0 < 1 << 21 ? 3 : 4 :
        part1 < 1 << 14 ?
          part1 < 1 << 7 ? 5 : 6 :
          part1 < 1 << 21 ? 7 : 8 :
      part2 < 1 << 7 ? 9 : 10;

  var offset = grow(bb, size);
  var bytes = bb.bytes;

  switch (size) {
    case 10: bytes[offset + 9] = (part2 >>> 7) & 0x01;
    case 9: bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
    case 8: bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
    case 7: bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
    case 6: bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;
    case 5: bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
    case 4: bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
    case 3: bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
    case 2: bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;
    case 1: bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
  }
}

function readVarint32ZigZag(bb) {
  var value = readVarint32(bb);

  // ref: src/google/protobuf/wire_format_lite.h
  return (value >>> 1) ^ -(value & 1);
}

function writeVarint32ZigZag(bb, value) {
  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint32(bb, (value << 1) ^ (value >> 31));
}

function readVarint64ZigZag(bb) {
  var value = readVarint64(bb, /* unsigned */ false);
  var low = value.low;
  var high = value.high;
  var flip = -(low & 1);

  // ref: src/google/protobuf/wire_format_lite.h
  return {
    low: ((low >>> 1) | (high << 31)) ^ flip,
    high: (high >>> 1) ^ flip,
    unsigned: false,
  };
}

function writeVarint64ZigZag(bb, value) {
  var low = value.low;
  var high = value.high;
  var flip = high >> 31;

  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint64(bb, {
    low: (low << 1) ^ flip,
    high: ((high << 1) | (low >>> 31)) ^ flip,
    unsigned: false,
  });
}
