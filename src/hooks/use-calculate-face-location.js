export const useCalculateFaceLocations = () => {
  const getFaceLocationDimensions = (region, portalRoot) => {
    const portalRootNode = document.getElementById(portalRoot);
    const { bounding_box: boundingBox } = region.region_info;
    const width = Number(portalRootNode.width);
    const height = Number(portalRootNode.height);

    return {
      leftCol: boundingBox.left_col * width,
      topRow: boundingBox.top_row * height,
      rightCol: width - boundingBox.right_col * width,
      bottomRow: height - boundingBox.bottom_row * height,
    };
  };
  const getRegionsFaceLoacationDimensions = (regions, portalRoot) =>
    regions.map((region) => getFaceLocationDimensions(region, portalRoot));

  return {
    getRegionsFaceLoacationDimensions,
  };
};
