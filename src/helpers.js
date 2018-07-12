const getAssetData = (asset) => asset.type ? `url("data:${asset.type};base64,${asset.data}")` : `url("${asset.data}")`;

export default {
  getAssetData,
};
