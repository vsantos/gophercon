type Router interface {
	Create(shift router.Shift) (*router.IstioRules, error)
	Validate(shift router.Shift) error
	Update(shift router.Shift) error
	Clear(shift router.Shift) error
	List(selector map[string]string) (*router.IstioRouteList, error)
}
