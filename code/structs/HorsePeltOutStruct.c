struct HorsePeltOut {
  @out Hash m_itemHash;
  @out Hash m_albedoHash;
  @out Hash m_normalHash;
};

struct HorsePeltIn {
  /// The amount of pelts we should try to get, this cannot be larger than 3
  @in u8 m_numPelts;

  struct HorsePeltOut m_data[3];

  @padding u8 pad[48];
};

